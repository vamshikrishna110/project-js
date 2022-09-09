const deposit_btn = document.getElementById("deposit-btn");
const despositamountbtn = document.getElementById("deposit-amount");
const currentdepositval = document.getElementById("current-deposit");
const currentbalanceval = document.getElementById("current-balance");

const withdrawbtn = document.getElementById("withdraw-btn");
const withdrawamount = document.getElementById("withdraw-amount");
const currentwithdrawval = document.getElementById("current-withdraw");

var arr = new Array();

//console.log(typeof(currentStringToInt))
deposit_btn.onclick = function () {
  console.log(despositamountbtn.value);

  if (despositamountbtn.value >= 0) {
    currentdepositval.textContent = despositamountbtn.value;
    let currentval = currentbalanceval.innerText;
    let currentStringToInt = parseFloat(currentval);
    let total = currentStringToInt + parseFloat(despositamountbtn.value);
    console.log(total);
    currentbalanceval.textContent = total;
    var date_time = new Date();
    console.log(date_time);

    
    var today = moment();
    var now = today.format("YYYY-MM-DD HH:mm:ss");

    var obj = {
      operation: "+",
      amount: despositamountbtn.value,
      balance: total,
      time: now,
    };

    arr.push(obj);
    console.log(arr);
  } else {
    alert("please enter valid amount to deposit");
  }

  display();
};

withdrawbtn.onclick = function () {
  let amount = parseFloat(withdrawamount.value);
  console.log(amount);

  let currentval = currentbalanceval.innerText;
  console.log(currentval);
  let currentStringToInt = parseFloat(currentval);

  if (amount <= currentStringToInt && amount > 0) {
    currentwithdrawval.textContent = withdrawamount.value;

    let total = currentStringToInt - parseFloat(amount);
    console.log(total);
    currentbalanceval.textContent = total;
    var date_time = new Date();
    console.log(date_time);

   
    var today = moment();
    var now = today.format("YYYY-MM-DD HH:mm:ss");

    var obj = {
      operation: "-",
      amount: withdrawamount.value,
      balance: total,
      time: now,
    };

    arr.push(obj);
  } else {
    alert("please enter valid amount to withdraw");
  }

  display();
};


function display() {
  document.getElementById("tbody").innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = i + 1;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = arr[i].operation + arr[i].amount;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = arr[i].balance;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerHTML = arr[i].time;
    tr.appendChild(td4);

    let check = document.createElement("p");
    check.innerHTML = arr;
    document.getElementById("tbody").appendChild(tr);
  }
}
