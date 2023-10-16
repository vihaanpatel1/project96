var firebaseConfig = {
    apiKey: "AIzaSyCOlAMlWcDoH2JV3Y9rLgySg63oMFJb8kg",
    authDomain: "kwitter-3db81.firebaseapp.com",
    databaseURL: "https://kwitter-3db81-default-rtdb.firebaseio.com",
    projectId: "kwitter-3db81",
    storageBucket: "kwitter-3db81.appspot.com",
    messagingSenderId: "499597545093",
    appId: "1:499597545093:web:63a45bc1786b2f466e23ec"
  };
  
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });
    document.getElementById("msg").value = "";
}