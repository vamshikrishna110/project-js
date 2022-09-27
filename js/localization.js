var languages = Array.from(document.getElementsByClassName('language'));
var xhttp = new XMLHttpRequest();
var langDocument = {};
languages.forEach(function(value, index){
    languages[index].addEventListener('click', function(){
        switchLanguage(this.dataset.lang);
       
    });
    switchLanguage('britain');
});
xhttp.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
        langDocument = JSON.parse(this.responseText);
        processLangDocument();
        processCurrencyDocument();
        processDateTimes();
    }
};
function switchLanguage(language){
    xhttp.open("GET", "i18n/" + language + ".json", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function processLangDocument(){
    var tags = document.querySelectorAll('span,img,a,label,li,option,h1,h2,h3,h4,h5,h6');
    Array.from(tags).forEach(function(value, index){
        var key = value.dataset.langkey;
        if(langDocument[key]) value.innerText = langDocument[key];
    });
}
function processDateTimes() {
    var tags = document.querySelectorAll('span');
    Array.from(tags).forEach(function(value, index) {
        var key  = value.dataset.picker;
        if(!key) return;
        var val = new Date();
        val = val.toLocaleString(langDocument['LocaleFormat']);
        value.innerText = val;
    });
}
function processCurrencyDocument() {
    var tags = document.querySelectorAll('input');
    Array.from(tags).forEach(function(value, index) {
        var key = value.dataset.currency;
        value.value = "";
        if(!key) return;        
        value.addEventListener("change", function(evt) {
            var val =  evt.target.value;
            val =  Number(val.replace(/[^0-9.-]+/g,""));
            evt.target.value = (val).toLocaleString(langDocument['LocaleFormat'], { style: 'currency', currency: langDocument['Currency']});
        });
    });
}
