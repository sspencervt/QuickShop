let itemInput = document.querySelector(".itemInput").value;
let submitButton = document.querySelector(".addItemButton");
let output = document.querySelector(".output");
let list = document.querySelector(".list");


console.log(output + submitButton + itemInput)
submitButton.onclick = addItem;

function addItem() {
    let newInput = document.querySelector(".itemInput").value;
    let newListItem = document.createElement("li");
    list.appendChild(newListItem)
    newListItem.innerHTML = newInput;
}