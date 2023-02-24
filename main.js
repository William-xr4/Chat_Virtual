function Logar() {
    userName = document.getElementById("inputname").value;
    localStorage.setItem("userName", userName);
      window.location = "index2.html";
}