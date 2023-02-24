const firebaseConfig = {
  apiKey: "AIzaSyCz7ITNKO2fBhct9URBe3dbdwIvACzE9OQ",
  authDomain: "chat-virtual-b24a9.firebaseapp.com",
  projectId: "chat-virtual-b24a9",
  storageBucket: "chat-virtual-b24a9.appspot.com",
  messagingSenderId: "835112359446",
  appId: "1:835112359446:web:db1817a939338212bdc737"
};

const app = initializeApp(firebaseConfig);

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