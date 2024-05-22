const dialog = document.querySelector('#modalDialog');
const openButton = document.querySelector('#openButton');
const closeButton = document.querySelector('#closeButton');
const modalForm = document.querySelector("#modalForm");

openButton.addEventListener("click", (e) => {
    dialog.showModal();
})

closeButton.addEventListener("click", (e) => {
    dialog.close();
})

modalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Enviando dados...")
})

dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    if(
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clienty > rect.bottom
    ){
        dialog.close();
    }
})

// Apagar as classes dos estilos dinâmicos do HTML
// (correct, error, visible e required-popup)

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function () {
  usernameLabel.classList.add("required-popup");
})   

// Ocultar popup de campo obrigatório
//  remover a classe "required-popup" qdo o mouse sai
usernameInput.addEventListener("blur", function () {
    usernameLabel.classList.remove("required-popup");
});

// Validar valor do input
usernameInput.addEventListener("input", function(evento){
    let valor = evento.target.value;
    console.log(valor);

    // consição para aceitar mais de 3 caracteres
    if(valor.length < 3){
        // aplicando estilos dinamicos
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
      
      
        usernameHelper.classList.add("visible");
        usernameHelper.innerText = "O nome de usuário deve ter no mínimo 3 caracteres";
    }else{
        // estilos dinamicos caso seja válido
        usernameInput.classList.remove("error");
        usernameInput.classList.add("correct");
        usernameHelper.classList.remove("visible");
    }
});

function mostrarPopup(input, label){
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", function () {
        label.classList.add("required-popup")
    })
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", function () {
        label.classList.remove("required-popup")
    })
};
mostrarPopup(usernameInput, usernameLabel);

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel);

emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.includes("@") && valor.includes(".com")){
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
    }else{
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.classList.add("visible");
        emailHelper.innerText = "Insira um email válido";
    }
})