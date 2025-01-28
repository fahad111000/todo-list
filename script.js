let addTask = document.getElementById('addTask');
let newInput = document.getElementById('newInput');
let ulItems = document.getElementById('ulItems');
let pendingTasks = document.querySelector('span');
let clearAll = document.getElementById('clearAll');
let pendingCounter = 0
let editedText = null;


addTask.addEventListener('click', () => {
    if (newInput.value === '') {
        alert("Please add some Tasks");
    }

    else if (editedText) {
        editedText.firstChild.textContent = newInput.value;
        editedText = null
        newInput.value = "";
        addTask.innerHTML = `<i class="fa-solid fa-plus"></i>`
    }

    else {
        addingItems();
        newInput.value = ''
    }
})

function addingItems() {
    let li = document.createElement('li');
    li.textContent = newInput.value;
    ulItems.appendChild(li);

    // button Wraper (div)
    let buttonWrapper = document.createElement('div');

    // Create Edit button
    let editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.className = 'edit';

    // Create Delete Button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'delete';

    // Append
    buttonWrapper.appendChild(editButton);
    buttonWrapper.appendChild(deleteButton);
    li.appendChild(buttonWrapper);


    pendingCounter++;
    pendingTasks.innerHTML = `<b>${pendingCounter}</b>`;

    // Edit Button functionally
    editButton.addEventListener('click', () => {
        newInput.value = li.firstChild.textContent;
        editedText = li
        addTask.textContent = "task Updated"
    })

    // Delete Button functionally
    deleteButton.addEventListener('click', () => {
        ulItems.removeChild(li);
        pendingCounter--;
        pendingTasks.innerHTML = `<b>${pendingCounter}</b>`;
        newInput.value = '';
    })

    clearAll.addEventListener('click', () => {
        ulItems.removeChild(li);
        pendingCounter = 0
        pendingTasks.innerHTML = `<b>${pendingCounter}</b>`;

    })
}


