document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const btn = document.getElementById('add-task-btn');
    const list = document.getElementById('todo-list');

    let taskarr = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render tasks on page load
    taskarr.forEach((e) => {
        renderTask(e);
    });

    btn.addEventListener('click', function () {
        if (input.value.trim() !== '') {
            const text = input.value.trim();

            const newTask = {
                id: Date.now(),
                text: text,
                completed: false,
            };

            taskarr.push(newTask);
            saveTasks();
            renderTask(newTask);
            input.value = '';
        }
    });

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(taskarr));
    }

    function renderTask(e) {
        const task = document.createElement('li');

let tasktext = document.createElement('span');
tasktext.textContent  =e.text;
tasktext.style.textDecoration = e.completed ? 'line-through' : 'none';

        let button = document.createElement('button');
        button.textContent = 'Delete';

        task.appendChild(tasktext);
        task.appendChild(button);
        list.appendChild(task);

        // Add hover effect
        task.addEventListener('click', function () {
           e.completed = !e.completed;
           tasktext.style.textDecoration = e.completed?'line-through':'none'
           saveTasks();
        });

       
        // Delete functionality
        button.addEventListener('click', function () {
            list.removeChild(task);
            taskarr = taskarr.filter((t) => t.id !== e.id);
            saveTasks();
        });
    }
});
