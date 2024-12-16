
let addTask = document.getElementById('addTask');
let newInput = document.getElementById('newInput');
let ulItems = document.getElementById('ulItems');

addTask.addEventListener('click', ()=>{
    if (newInput.value === '') {
        alert("Please add some Tasks");
    }
    else {
        addingItems();
        newInput.value = ''

    }
})

function addingItems() {
    let listItem = document.createElement('li');
    listItem.innerText = `${newInput.value}`;
    ulItems.appendChild(listItem);
    
}


