document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${task}
          <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
      });
    }
  
    function addTask() {
      const task = taskInput.value.trim();
      if (task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        renderTasks();
      }
    }
  
    window.deleteTask = function (index) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    };
  
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  
    renderTasks();
  });
  