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

var Username=localStorage.getItem("userName");
var Roomname=localStorage.getItem("Sala");

function Enviar_Mensagem(){
  var mensagem=document.getElementById("inputname").value;
  firebase.database().ref(Roomname).push({
    Name:Username,
    Message:mensagem,
    Like:0
  });
  mensagem="";
}

function Pegar_Dado(){
  firebase.database().ref("/"+Roomname).on("value", function(snapshot){
    document.getElementById("output").innerHTML="";
    snapshot.forEach(function(childSnapshot){
      var childKey=childSnapshot.key;
      var childData=childSnapshot.val();
      if(childKey!="purpose"){
        var Id_da_Mensagem=childKey;
        var Dado_da_Mensagem=childData;
        var Nome=Dado_da_Mensagem["Name"];
        var Mensagem=Dado_da_Mensagem["Message"];
        var Like=Dado_da_Mensagem["Like"];

        var Tag_do_nome='<h4 id="h4" class="fw-bold bg-primary bg-gradient shadow mb-5 rounded">'+Nome+'<img src="tick.png" id="tick"><h4>'
        var Tag_menssagem='<h4 id="h4_2" class="fw-bold bg-primary bg-gradient shadow mb-5 rounded">'+Mensagem+'</h4>';
        var Tag_like='<button class="btn text-danger fw-bold bg-primary bg-gradient shadow mb-5 rounded" id="'+Id_da_Mensagem+'" value="'+Like+'" onclick=Like(this.id)>';
        var Tag_span='<span class="border border-danger w-50 bg-info bg-gradient shadow mb-5 rounded" > Like: '+Like+'</span></button><hr>';
        var box= Tag_do_nome+Tag_menssagem+Tag_like+Tag_span;
        document.getElementById("output").innerHTML+=box;
      }
    });
  });
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
function Like(Id_da_Mensagem){
  var Id_do_Botao=Id_da_Mensagem;
  var Likes=document.getElementById(Id_do_Botao).value;
  var Atualiza_Like=Number(Likes)+1;
  firebase.database().ref(Roomname).child(Id_da_Mensagem).update({
    Like:Atualiza_Like
  });
}