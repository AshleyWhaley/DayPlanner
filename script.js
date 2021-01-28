//Current Date Info
var currentDay = moment().format('dddd, MMMM Do');
var timeEl = $("#currentDay").text(currentDay);

//Tracking the current time
var currentTime = moment().format("HH");

//Color Coding the Time Blocks
for (i = 9; i <= 17; i++){
    var selectedString = "#" + [i]
    
    var selectedHour = $(selectedString).attr("timeValue");
    
    if (selectedHour < currentTime){
        $(selectedString).removeClass("future");
        $(selectedString).removeClass("present");
        $(selectedString).addClass("past");
    };
    if(currentTime === selectedHour){
        $(selectedString).removeClass("future");
        $(selectedString).addClass("present");
    }
    $("button").on("click", function(){
        var quest = $(this).siblings(".toDo").val()
        var time = $(this).siblings("textarea").attr("id");
        
        localStorage.setItem(time, quest);
    });
    $(selectedString).text(localStorage.getItem(i));
    
}
