var usersCli = document.getElementById('usersCli');
var nameInput = document.getElementById('nameInput');
var telInput = document.getElementById('telInput');
var emailInput = document.getElementById('emailInput');
var cidadeInput = document.getElementById('cidadeInput');
var estadoInput = document.getElementById('estadoInput');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {
    create(nameInput.value, telInput.value, emailInput.value, cidadeInput.value, estadoInput.value);
});

// Função para criar um registro no Firebase
function create(name, tel, email, cidade, estado ) {
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
    usersCli.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().tel + ': ' + item.val().email + ': ' + item.val().cidade  + ': ' + item.val().estado));
        usersCli.appendChild(li);
    });
});