const firebaseConfig = {
  apiKey: "AIzaSyCWVBEe_n8R2H5LzBW2IO8wXweh0HiwZIo",
  authDomain: "chat-virtual-8dec8.firebaseapp.com",
  databaseURL: "https://chat-virtual-8dec8-default-rtdb.firebaseio.com",
  projectId: "chat-virtual-8dec8",
  storageBucket: "chat-virtual-8dec8.appspot.com",
  messagingSenderId: "715738356772",
  appId: "1:715738356772:web:a5f6b25763899b405b4cb1"
};

firebase.initializeApp(firebaseConfig);

var Username=localStorage.getItem("userName")

function Pegar_Dado(){
  firebase.database().ref("/").on("value", function(snapshot){
    document.getElementById("output").innerHTML="";
    snapshot.forEach(function(childSnapshot){
      var childKey=childSnapshot.key;
      var Salas =childKey;
      var box ='<div class="room_name" id='+Salas+' onclick="Redirecionar_para_a_sala(this.id)"> #'+Salas+'</div><hr>';
      document.getElementById("output").innerHTML+=box;
    });
  });
}
function Adicionar_sala(){
    var Sala = document.getElementById("inputname").value;
    firebase.database().ref("/").child(Sala).update({
      purpose:"Adicionando sala"
    });
    localStorage.setItem("Sala", Sala);
    window.location="index3.html";
}
Pegar_Dado();
function Redirecionar_para_a_sala(nome_da_sala){
  console.log(nome_da_sala);
  localStorage.setItem("Sala", nome_da_sala);
  window.location="index3.html";
}
function Logout(){
  localStorage.removeItem("userName");
  localStorage.removeItem("Sala");
  window.location="index.html";
}