document.addEventListener('DOMContentLoaded',()=>{

    const input = document.getElementById('todo-input');
    const btn = document.getElementById('add-task-btn');
    const list = document.getElementById('todo-list');

    let taskarr =  JSON.parse(localStorage.getItem('tasks')) || [];

    taskarr.forEach((e)=>{
        rendertask(e);
    })

    btn.addEventListener('click',addtask)


    function addtask(){
        
     let taskname = input.value.trim();

         if(taskname.length>0){
                const taskobj = {
                    name:taskname,
                    completed:false,
                    id:Date.now()
                }
            
               


                taskarr.push(taskobj);
              savetask();
    rendertask(taskobj);
    input.value = "";
            }else{
                alert("Please enter a task");
            }
        
    }

    function rendertask(e){
        
            let li = document.createElement('li');
            let span = document.createElement('span');
            let button = document.createElement('button');

            span.textContent=e.name;
            span.style.textDecoration = e.completed ? 'line-through' : 'none';
            button.textContent="Delete";
            li.appendChild(span);
            li.appendChild(button);
            list.appendChild(li);

            li.addEventListener('click',()=>{
      e.completed=!e.completed;
span.style.textDecoration = e.completed?'line-through':'none'
                           savetask();
            })

            button.addEventListener('click',()=>{
                list.removeChild(li);
             taskarr =   taskarr.filter((t)=> t.id!==e.id );
                savetask()
            })
            
       
    }

    function savetask(){
        localStorage.setItem('tasks', JSON.stringify(taskarr));
    }




})