document.addEventListener('DOMContentLoaded',() => { 
    const inputElement = document.querySelector('#todo-input')
    const addBtn = document.querySelector('#add-task-btn')
    const todoList = document.querySelector('#todo-list')
    
   
    let task = JSON.parse(localStorage.getItem('tasks')) || []

    task.forEach((element) => renderTasks(element));
    addBtn.addEventListener('click',() =>{
    const tasktest = inputElement.value.trim()
    if(tasktest === "")return;
    const newTask = {
        id:Date.now(),
        text:tasktest,
        completed:false
    }
    task.push(newTask);
    savetasks();
    renderTasks(newTask);
    inputElement.value = "";
    console.log(task);
    
});
function renderTasks(task){
  const li = document.createElement('li')
  li.setAttribute("data-id",task.id)
  li.innerHTML = `<span> ${task.text}</span>
  <button>delete</button>`;
   
  li.querySelector('button').addEventListener('click',(e) =>{
    e.stopPropagation()
//    task = task.filter((t) => t.id !== task.id)
   li.remove()
   savetasks();
  } )
  todoList.appendChild(li);
  
}
function savetasks()
{
    localStorage.setItem('tasks',JSON.stringify(task))
}


})