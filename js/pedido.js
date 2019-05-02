var usersCli = document.getElementById('usersCli');
var nameInput = document.getElementById('nameInput');
var telInput = document.getElementById('telInput');
var emailInput = document.getElementById('emailInput');
var cidadeInput = document.getElementById('cidadeInput');
var estadoInput = document.getElementById('estadoInput');
var addButton = document.getElementById('addButton');
var usersProd = document.getElementById('usersProd');

// Ao clicar no botão
addButton.addEventListener('click', function () {
    create(nameInput.value, telInput.value, emailInput.value, cidadeInput.value, estadoInput.value);
});

// Ao mudar o produto
function teste() {
    var x = document.getElementById("usersProd").textContent;
    document.getElementById("totalInput").innerHTML = "You selected: " + x;
};

// Função para criar um registro no Firebase
function create(name, tel, email, cidade, estado) {
    var data = {
        name: name,
        tel: tel,
        email: email,
        cidade: cidade,
        estado: estado

    };

    return firebase.database().ref().child('cliente').push(data);
}
firebase.database().ref('cliente').on('value', function (snapshot) {
    snapshot.forEach(function (item) {
        var option = document.createElement('option');
        option.appendChild(document.createTextNode(item.val().name));
        usersCli.appendChild(option);
    });
});

firebase.database().ref('users').on('value', function (snapshot) {
    snapshot.forEach(function (item) {
        var option = document.createElement('option');
        option.appendChild(document.createTextNode(item.val().name));
        usersProd.appendChild(option);
    });
});