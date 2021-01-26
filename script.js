//Current Date Info
var currentDay = moment().format('dddd, MMMM Do');
var timeEl = $("#currentDay").text(currentDay);

//Tracking the current time
var currentTime = moment().format("HH");

//Color Coding the Time Blocks
for (i = 9; i <= 17; i++){
    var selectorString = "#" + [i]
    
    var selectedHour = $(selectorString).attr("timeValue");
    
    if (selectedHour < currentTime){
        $(selectorString).removeClass("future");
        $(selectorString).removeClass("present");
        $(selectorString).addClass("past");
    };
    if(currentTime === selectedHour){
        $(selectorString).removeClass("future");
        $(selectorString).addClass("present");
    }
    $("button").on("click", function(){
        var quest = $(this).siblings(".toDo").val()
        var time = $(this).siblings("textarea").attr("id");
        
        localStorage.setItem(time, quest);
    });
    $(selectorString).text(localStorage.getItem(i));
    
}
