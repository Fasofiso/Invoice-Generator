const washCar = { name: "Wash Car", price: 10 };
const mowLawn = { name: "Mow Lawn", price: 20 };
const pullWeeds = { name: "Pull Weeds", price: 30 };

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const task = document.getElementById("task");
const amount = document.getElementById("amount");
const total = document.getElementById("total");

let tasks = [];

let totalAmount = 0;

const renderList = () => {
  task.innerHTML = "";
  total.innerHTML = "";
  totalAmount = 0;

  tasks.forEach((item) => {
    task.innerHTML += `<div class="task-row"><span>${item.name}</span> <span class="remove-button" onclick="removeItem('${item.name}')">Remove</span></div>`;
    total.innerHTML += `<div><span>$ ${item.price}</span></div>`;
    totalAmount += item.price;
  });

  amount.innerText = `$ ${totalAmount}`;
};

const addItem = (itemName) => {
  if (itemName === "car") {
    tasks.push(washCar);
    renderList();
  }

  if (itemName === "lawn" && !tasks.some((item) => item.price === 20)) {
    tasks.push(mowLawn);
    renderList();
  }
  if (itemName === "weeds" && !tasks.some((item) => item.price === 30)) {
    tasks.push(pullWeeds);
    renderList();
  }
};

const removeItem = (itemName) => {
  const newTasks = tasks.filter((item) => item.name !== itemName);
  tasks = [...newTasks];
  renderList();
};

const sendInvoice = () => {
  tasks = [];
  renderList();
};
