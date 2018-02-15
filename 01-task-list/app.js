// Define UI Vars
const form = document.querySelector('#task-form'); // form
const taskList = document.querySelector('.collection'); //task list ul
const clearBtn = document.querySelector('.clear-tasks'); //clear tasks button
const filter = document.querySelector('#filter'); //filter text input
const taskInput = document.querySelector('#task'); // task text input


//Load all event listeners
loadEventListerns();

//Load all event listeners
function loadEventListerns(){
    //Load Tasks into view when dom loads
    document.addEventListener('DOMContentLoaded',loadTasksFromLocalStorage) ;
    //Add Task event
    form.addEventListener('submit', addTask);
    // Remove Task event
    taskList.addEventListener('click', removeTask);
    // Clear Tasks button
    clearBtn.addEventListener('click', clearTasks);
    // Filter Tasks event
    filter.addEventListener('keyup', filterTasks);
}

//Load Tasks into view
function loadTasksFromLocalStorage(){
    if(localStorage.getItem('tasks')!==null){
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(function(task){
            createLinkElement(task);
        });
    }
}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Enter a new task');
    }else{
        //Create List item from scratch
        createLinkElement(taskInput.value);
        // Store task in local Storage
        storeTaskInLocalStorage(taskInput.value);
        //Clear text input
        taskInput.value = '';        
    }
    e.preventDefault();
}

//Creating list items
function createLinkElement(task){
    //1. create li element
    const li = document.createElement('li');
    //2. Add class collection-item
    li.className='collection-item';
    // let textNode;
    const textNode =  document.createTextNode(task);
    //4. Append text node to li
    li.appendChild(textNode);
    //5. Create new link element
    const link = document.createElement('a');
    //6. Add classes delete-item secondary-content
    link.className='delete-item secondary-content';
    //7. Add cross icon
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //8. Append link to li
    li.appendChild(link);
    //9. Append li to ul
    taskList.appendChild(li);
}

//Adding Task in local storage
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            const task = e.target.parentElement.parentElement.firstChild.textContent;
            removeTaskFromLocalStorage(task);
            e.target.parentElement.parentElement.remove();
        }        
    }
}

//Removing Task in local storage
function removeTaskFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    const index = tasks.indexOf(task);
    tasks.splice(index,1)

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Clear Tasks
function clearTasks(e){
    if(confirm('Are you sure?')){

        //1. method
        // taskList.innerHTML='';

        //2. remove child Faster
        while(taskList.childElementCount>0){
            taskList.removeChild(taskList.firstChild);
        }

        clearTasksFromLocalStorage();

        // My Method
        // if(taskList.childElementCount>0){
        //     const childArray = Array.from(taskList.children);
        //     for(let child in childArray){                
        //         childArray[child].remove();                   
        //     }
        // }
    }   
}


//Clear tasks array from localstorage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}



// Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)===-1){
            task.style.display='none';
        }else{
            task.style.display='block';
        }
    });
}

