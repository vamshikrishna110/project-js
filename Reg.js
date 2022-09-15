

function store(){
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var mailformat = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
    var mail = '[a-z0-9]+@gmail.com'

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else if (!name.value.match(mail)) {
        alert("please enter valid email address")
        
    }else if(name.value.match(mail)){
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
        if(name !== null && pw.value !== null ) { 
            window.location.replace("http://127.0.0.1:5501/banking.html")
        }
        }
    }
   
    





