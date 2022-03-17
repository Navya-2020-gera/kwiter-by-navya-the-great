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

user_name=localstorage.getItem("user_name")
user_name=localstorage.getItem("room_name")

function send(){
msg=document.getElementById("msg").value ;
firebase.database().ref(room_name).push ({
      name : user_name,
      message : msg ,
      like : 0
})

document.getElementById("msg").value=""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name=message_data['name']
message=message_data['message']
like=message_data['like']

name_with_tag="<h4> "+name+"<img class='user_tick' src='tick.png'> </h4>"
msg_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>LIKE :"+like+"</span></button><hr>"

row=name_with_tag + msg_with_tag + like_button + span_with_tag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
    }
    function update_like(id){
          console.log(id)
          button_id=id
          likes=document.getElementById("button_id").value
          update_likes=Number(likes)+1
          firebase.database().ref(room_name).child(id).update({
                like:update_likes
          })
    }