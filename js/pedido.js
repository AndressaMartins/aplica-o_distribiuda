var usersCli = document.getElementById('usersCli');
var usersProd = document.getElementById('usersProd');
var cliInput = document.getElementById('cliInput');
var prodInput = document.getElementById('prodInput');
var ageInput = document.getElementById('ageInput');
var totalInput = document.getElementById('totalInput');



// Ao clicar no botão
addButton.addEventListener('click', function () {
    create(cliInput.value, prodInput.value, ageInput.value, totalInput.value);
});

// Ao mudar o produto
function teste() {
    var x = document.getElementById("usersProd").textContent;
    document.getElementById("totalInput").innerHTML = "You selected: " + x;
};

// Função para criar um registro no Firebase
function create(cli, prod, age, total) {
    var data = {
        cli: cli,
        prod: prod,
        age: age,
        total: total
       

    };

    return firebase.database().ref().child('pedido').push(data);
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
firebase.database().ref('pedido').on('value', function (snapshot) {
    snapshot.forEach(function (item) {
        var option = document.createElement('option');
        option.appendChild(document.createTextNode(item.val().cli + ': ' + item.val().prod + ': ' + item.val().age + ': ' + item.val().total));
        usersCli.appendChild(option);
        usersProd.appendChild(option);
    });
});