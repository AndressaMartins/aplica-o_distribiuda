var usersProd = document.getElementById('usersProd');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var valorInput = document.getElementById('valorInput');
var tamanhoInput = document.getElementById('tamanhoInput');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {
    create(nameInput.value, ageInput.value, valorInput.value, tamanhoInput.value);
});

// Função para criar um registro no Firebase
function create(name, age, valor, tamanho ) {
    var data = {
        name: name,
        age: age,
        valor: valor,
        tamanho: tamanho
       
       

    };

    return firebase.database().ref().child('users').push(data);
}
firebase.database().ref('users').on('value', function (snapshot) {
    usersProd.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().age + ': ' + item.val().valor + ': ' + item.val().tamanho));
        usersProd.appendChild(li);
    });
});