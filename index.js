const itemInput = document.getElementById('item-input');
const addItemBtn = document.getElementById('add-item-btn');
const itemList = document.getElementById('item-list');

function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = itemText;
    taskItem.appendChild(taskTextSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete-Item';
    deleteBtn.addEventListener('click', () => {
        itemList.removeChild(taskItem);  
        
    });
    taskItem.appendChild(deleteBtn);

    itemList.appendChild(taskItem);
    itemInput.value = '';
}

addItemBtn.addEventListener('click', addItem);
  
