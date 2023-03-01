const firebaseConfig = {
  apiKey: "AIzaSyCWVBEe_n8R2H5LzBW2IO8wXweh0HiwZIo",
  authDomain: "chat-virtual-8dec8.firebaseapp.com",
  databaseURL: "https://chat-virtual-8dec8-default-rtdb.firebaseio.com",
  projectId: "chat-virtual-8dec8",
  storageBucket: "chat-virtual-8dec8.appspot.com",
  messagingSenderId: "715738356772",
  appId: "1:715738356772:web:a5f6b25763899b405b4cb1"
};

function Logar() {
    userName = document.getElementById("inputname").value;
    localStorage.setItem("userName", userName);
      window.location = "index2.html";
}