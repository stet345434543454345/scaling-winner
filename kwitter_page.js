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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         

      } });  }); }
getData();
function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
