let income = 0;
let budget = 0;
let expenses = 0;

function saveBudget(){

income = Number(document.getElementById("income").value);

budget = Number(document.getElementById("budget").value);

updateDisplay();

}

function addExpense(){

const name =
document.getElementById("expenseName").value;

const amount =
Number(document.getElementById("expenseAmount").value);

if(name === "" || amount <= 0){
alert("Enter valid expense");
return;
}

expenses += amount;

const list =
document.getElementById("expenseList");

const li =
document.createElement("li");

li.innerHTML =
`${name} - ₦${amount}`;

list.appendChild(li);

updateDisplay();

document.getElementById("expenseName").value="";

document.getElementById("expenseAmount").value="";

}

function updateDisplay(){

document.getElementById("incomeDisplay").innerText =
"₦" + income;

document.getElementById("expenseDisplay").innerText =
"₦" + expenses;

const balance =
income - expenses;

document.getElementById("balanceDisplay").innerText =
"₦" + balance;

const percent =
(expenses / budget) * 100;

document.getElementById("progress").style.width =
percent + "%";

if(percent > 80){

document.getElementById("progress").style.background =
"red";

}

}