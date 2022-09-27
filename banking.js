const deposit_btn = document.getElementById("deposit-btn");
const despositamountbtn = document.getElementById("deposit-amount");
const currentdepositval = document.getElementById("current-deposit");
const currentbalanceval = document.getElementById("current-balance");

const withdrawbtn = document.getElementById("withdraw-btn");
const withdrawamount = document.getElementById("withdraw-amount");
const currentwithdrawval = document.getElementById("current-withdraw");

var arr = new Array();

var count_transaction = 1;
deposit_btn.onclick = function () {
  console.log(despositamountbtn.value);

  if (despositamountbtn.value >= 0) {
    currentdepositval.textContent = despositamountbtn.value;
    let currentval = currentbalanceval.innerText;
    let currentStringToInt = parseFloat(currentval);
    let total = currentStringToInt + parseFloat(despositamountbtn.value);
    console.log(total);
    currentbalanceval.textContent = total;
   
    var today = moment();
    var now = today.format("YYYY-MM-DD HH:mm:ss");

    var obj = {
      operation: "+",
      amount: despositamountbtn.value,
      balance: total,
      time: now,
    };

    let date = document.getElementById("date").value;
    arr.push(obj);
    console.log(arr);

    sessionStorage.setItem(count_transaction, JSON.stringify(obj));
    sessionStorage.setItem("count", count_transaction);
    count_transaction++;
  } else {
    alert("please enter valid amount to deposit");
  }

  //display();
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

    var objOne = {
      operation: "-",
      amount: withdrawamount.value,
      balance: total,
      time: now,
    };

    arr.push(objOne);
    sessionStorage.setItem(count_transaction, JSON.stringify(objOne));
    sessionStorage.setItem("count", count_transaction);
    count_transaction++;
  } else {
    alert("please enter valid amount to withdraw");
  }

  //display();
};

function fun1() {
  var x = document.getElementById("container1");
  var y = document.getElementById("container2");
  if (x.style.display == "none") {
    document.getElementById("toggle").innerHTML = "Transcations details";
    x.style.display = "block";
    y.style.display = "none";
  } else {
    document.getElementById("toggle").innerHTML = "Home";
    x.style.display = "none";
    y.style.display = "block";
  }
}

function getTransaction() {
  document.getElementById("info").style.display = "block";
  let p1 = document.createElement("p");
  p1.style.color = "white";
  p1.innerHTML =
    "Transction detaials of :" + document.getElementById("date").value;
  document.getElementById("transc_info").innerHTML = "";
  document.getElementById("transc_info").appendChild(p1);

  display();
}

function display() {
  document.getElementById("tbody").innerHTML = "";
  var d_t = document.getElementById("date").value;
  
 
  var count = sessionStorage.getItem("count");
  var check=0;
  console.log(count);
  for (var i = 1; i <= count; i++) {
    //get date foirmat
    var trans = sessionStorage.getItem(i);
    trans = JSON.parse(trans);
    console.log(trans.time)

    var date1 = new Date(trans.time)
    dateTime1 = moment(date1).format('YYYY-MM-DD')
    console.log(dateTime1);

    if (d_t == dateTime1) {
    
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = i;
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.innerHTML = trans.operation + trans.amount;
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.innerHTML = trans.balance;
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.innerHTML = trans.time;
      tr.appendChild(td4);

      document.getElementById("tbody").appendChild(tr);
      check=1;
    }
  } 
  if(check==0){
    var msg=document.createElement("text");
    msg.innerHTML="No Transaction found for "+d_t+" date."
    document.getElementById("tbody").appendChild(msg);
    document.getElementById("thead").innerHTML="";
  }

}
