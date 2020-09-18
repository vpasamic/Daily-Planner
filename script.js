//sets jquery vars

//sets date and formats it for me already
var date = moment().format("MMM Do YY");
$("#currentDay").text(window.date);
console.log(date)

//sets current variable time
var time= moment().format("H");
console.log(time)

//changes coloir depending on time

var hour= ["9","10","11","12","13","14","15","16","17"]

function timecheck(){
    for(var i= 0; i<hour.length; i++){
        parseInt(hour[i]);
        if (time<hour[i]){
            $("#hour-"+hour[i]).removeClass("past");
            $("#hour-"+hour[i]).removeClass("present");
            $("#hour-"+hour[i]).addClass("future");
        }
        if (time>hour[i]){
            $("#hour-"+hour[i]).addClass("past");
            $("#hour-"+hour[i]).removeClass("present");
            $("#hour-"+hour[i]).removeClass("future");
        }
        if (time===hour[i]){
            $("#hour-"+hour[i]).removeClass("past");
            $("#hour-"+hour[i]).addClass("present");
            $("#hour-"+hour[i]).removeClass("future");
        }
    }
}
timecheck()
setInterval(function (){
    timecheck()
},1000*60);
// save local storage from text area
$(".saveBtn").on("click",function(){
    console.log("hi")
    console.log($(this).siblings(".description").val())

})









