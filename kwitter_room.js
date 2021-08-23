
var firebaseConfig = {
      apiKey: "AIzaSyD1fMHVuR69Tfpsu2LiYxyp1s-O2J9M-zY",
      authDomain: "kwiti-f3a56.firebaseapp.com",
      databaseURL: "https://kwiti-f3a56-default-rtdb.firebaseio.com",
      projectId: "kwiti-f3a56",
      storageBucket: "kwiti-f3a56.appspot.com",
      messagingSenderId: "651864486368",
      appId: "1:651864486368:web:fdf494179a1d69ef413b85"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Names - " + Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;

     
      });});}
getData();
function addroom()
      {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html"
          
      }
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
  
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
      
