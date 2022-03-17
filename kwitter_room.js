var firebaseConfig = {
  apiKey: "AIzaSyDbcAI5rpopO6s34pP2CUsgmQxW7OZqMc4",
  authDomain: "chat-d1a0c.firebaseapp.com",
  databaseURL: "https://chat-d1a0c-default-rtdb.firebaseio.com",
  projectId: "chat-d1a0c",
  storageBucket: "chat-d1a0c.appspot.com",
  messagingSenderId: "623069103899",
  appId: "1:623069103899:web:718116350b9a0c866ab5be",
  measurementId: "G-R5S9D3MBQ2"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("name_welcome").innerHTML="welcome "+ user_name + "!"

  function addRoom(){
    room_name=document.getElementById("room_name").value

    firebase.database.ref("/").child(room_name).update({
      purpose:"adding room name" 
    })
     localStorage.setItem("room_name",room_name)
     window.location="kwitter_page.html"
     
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
        document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("room_name",room_name)
  window.location="kwitter_page.html"
}
function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location="index.html"
}