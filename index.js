const washCar = { name: "Wash Car", price: 10 };
const mowLawn = { name: "Mow Lawn", price: 20 };
const pullWeeds = { name: "Pull Weeds", price: 30 };

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const task = document.getElementById("task");
const amount = document.getElementById("amount");

let totalAmount = 0;

function wash() {
  const taskToAdd = `<div><span>${washCar.name}</span></div>`;
  task.innerHTML += taskToAdd;
  const totalToAdd = `<div><span>$ ${washCar.price}</span></div>`;
  total.innerHTML += totalToAdd;
  totalAmount += washCar.price;
  amount.innerText = `$ ${totalAmount}`;
}

function mow() {
  const taskToAdd2 = `<div><span>${mowLawn.name}</span></div>`;
  task.innerHTML += taskToAdd2;
  const totalToAdd2 = `<div><span>$ ${mowLawn.price}</span></div>`;
  total.innerHTML += totalToAdd2;
  totalAmount += mowLawn.price;
  amount.innerText = `$ ${totalAmount}`;
}

function pull() {
  const taskToAdd3 = `<div><span>${pullWeeds.name}</span> </div>`;
  task.innerHTML += taskToAdd3;
  const totalToAdd3 = `<div><span>$ ${pullWeeds.price}</span></div>`;
  total.innerHTML += totalToAdd3;
  totalAmount += pullWeeds.price;
  amount.innerText = `$ ${totalAmount}`;
}
