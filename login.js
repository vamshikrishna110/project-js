function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        if(userName.value !== null && userPw.value !== null ) { 
            window.location.replace("http://127.0.0.1:5501/banking.html")
        }
    }else{
        alert('Error on login');
    }
}