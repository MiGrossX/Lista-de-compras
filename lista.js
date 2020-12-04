var listElement = document.querySelector ('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var foods = JSON.parse(localStorage.getItem('list_foods')) || [];

function renderFoods(){
    listElement.innerHTML = '';

    for (food of foods){
        var foodElement = document.createElement('li');
        var foodText = document.createTextNode(food);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = foods.indexOf(food);
        linkElement.setAttribute('onclick', 'deleteFoods(' + pos +')');

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        foodElement.appendChild(foodText);
        foodElement.appendChild(linkElement);

        listElement.appendChild(foodElement);
    }
}

renderFoods();

function addFood() {
    var foodText = inputElement.value;

    foods.push(foodText);
    inputElement.value = '';
    renderFoods();
    saveToStorage();
}

buttonElement.onclick = addFood;

function deleteFoods (pos){
    foods.splice(pos, 1);
    renderFoods();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_foods', JSON.stringify(foods));
}