let output = moment().format('MMMM Do YYYY,');
document.getElementById('Todays').innerHTML = output;
let cityName = 'mumbai';
let key = 'c3a100ac1bb8aef134efd003edc67f26';
link = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&apikey="+key;
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
var obj = JSON.parse(this.response);
if (request.status >= 200 && request.status < 400) {
var temp = obj.main.temp+',';
var wind = obj.wind.speed;
var loca = obj.name+',';
document.getElementById('loca').innerHTML = loca;
document.getElementById('temp').innerHTML = temp;
document.getElementById('wind').innerHTML = wind;
//output += '<li>'+users[i].name+'</li>';
}
else{
console.log("The city doesn't exist! Kindly check");
    }
}
request.send();

qlink = "http://quotes.rest/qod.json?category=inspire"
var qrequest = new XMLHttpRequest();
qrequest.open('GET',qlink,true);
qrequest.onload = function() {
    var qobj = JSON.parse(this.qrequest);

    if (qrequest.status >= 200 && qrequest.status <400) {
       var dquotes = qobj.quotes.quote+',';
       document.getElementById('quotes').innerHTML = dquotes;
    }
    else{
        console.log("The city doesn't exist! Kindly check");
            }
}
qrequest.send();
