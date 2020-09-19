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
        time=parseInt(time)
        var x=parseInt(hour[i]);
        var id = "hour-"+x
        if (time<x){
            $("#"+id).removeClass("past");
            $("#"+id).removeClass("present");
            $("#"+id).addClass("future");
        }
        else if (time>x){
            $("#"+id).addClass("past");
            $("#"+id).removeClass("present");
            $("#"+id).removeClass("future");
         
        }
        else if (time===x){
            $("#"+id).removeClass("past");
            $("#"+id).addClass("present");
            $("#"+id).removeClass("future");
            
        }
    }
}

for(var i= 0; i<hour.length; i++){
    var x=parseInt(hour[i])
    var id = "hour-"+x
    var hi=localStorage.getItem(id)
    $("#"+id).children(".description").val(hi)
}

timecheck()
setInterval(function (){
    timecheck()
},1000*60);

// save local storage from text area
$(".saveBtn").on("click",function(){
    var todo = $(this).siblings(".description").val();
    var id=($(this).parent(".row").attr("id"))
    localStorage.setItem(id,todo);
})














