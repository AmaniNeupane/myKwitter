
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyARR4UHTC0d-zZnAuDAoHu5BgJwz9v5EsE",
      authDomain: "kwitter-cbf15.firebaseapp.com",
      databaseURL: "https://kwitter-cbf15-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbf15",
      storageBucket: "kwitter-cbf15.appspot.com",
      messagingSenderId: "804190359605",
      appId: "1:804190359605:web:0d8461447a36e7ab3ca17c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)' + Room_names + </div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name );
      window.location="kwitter_page.html";
}

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name" , name);
window.location="kwitter_page.html"
}