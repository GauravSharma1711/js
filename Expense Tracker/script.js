document.addEventListener('DOMContentLoaded', () => {
    const expenseform = document.getElementById('expense-form');
    const expensenameinput = document.getElementById('expense-name');
    const expenseamountinput = document.getElementById('expense-amount');
    const expenselist = document.getElementById('expense-list');
    const totalamountdisplay = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let total = calctotal();
    renderExpenses();

    expenseform.addEventListener('submit', (e) => {
       
            e.preventDefault();

            const expensename = expensenameinput.value.trim();
            const expenseamount = parseFloat(expenseamountinput.value.trim());

            if (expensename && !isNaN(expenseamount)) {
                const newExpense = {
                    id:Date.now(),
                   name:expensename,
                  amount:expenseamount,
                };

              
                expenses.push(newExpense);
                console.log(expenses);
                
                savetolocal(expenses);
                updatetotal();
                renderExpenses();
        
                expensenameinput.value = '';
                expenseamountinput.value = '';

            } else {
                alert('Please fill out all fields before submitting!');
            }
        
    });

    function savetolocal(expenses) {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function calctotal(){
return expenses.reduce((total,expense)=>total+expense.amount,0);
    }

    function updatetotal(){
        totalamount = calctotal();
        totalamountdisplay.textContent=totalamount.toFixed(2);
    }



    function renderExpenses(){
expenselist.innerHTML="";

expenses.forEach(e=> {
    const li = document.createElement('li');
    li.innerHTML=`
    ${e.name}- $${e.amount}
    <button data-id="${e.id}">Delete</button>
    `
    expenselist.appendChild(li);
    
});
    }


    expenselist.addEventListener('click',(e)=>{
if(e.target.tagName==='BUTTON'){
    const  expenseId  =   parseInt(e.target.getAttribute('data-id'));
    expenses = expenses.filter(expense=>expense.id !=expenseId);
    savetolocal();
    renderExpenses();
    updatetotal()
}
    })
  

});
