var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elBtn = document.querySelector(".form__btn");
var elList = document.querySelector(".list");


var todoList = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var elInputVal = elInput.value.trim();
    elInput.value = "";

    var todo = {
        id : todoList.length + 1,
        value : elInputVal,
    }

    todoList.push(todo);
    elList.innerHTML = "";

    for (var item of todoList){
        var newItem = document.createElement("li");
        newItem.textContent = `${item.id}. " ${item.value} "`;
        elList.appendChild(newItem);
    }
})