
  var firebaseConfig = {
      apiKey: "AIzaSyCSWXFgGuE5HYW1IHm5XSGvsL4Y-eYlz0o",
      authDomain: "kwitter-9c9e2.firebaseapp.com",
      databaseURL: "https://kwitter-9c9e2-default-rtdb.firebaseio.com",
      projectId: "kwitter-9c9e2",
      storageBucket: "kwitter-9c9e2.appspot.com",
      messagingSenderId: "889850204409",
      appId: "1:889850204409:web:eead8fca9a617f6f3d1228",
      measurementId: "G-PFFDCCC1C9"
    };
   
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name" + room_name);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML=row;


      });});}
getData();
function AddRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";}
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
    
  }

