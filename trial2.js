var inputValue = document.getElementById("task")
var counter = 1;


AddTask = function()
{
    if (localStorage.getItem("task_counter") === null){
    localStorage.setItem("task_counter",counter)
    }else
    {
     counter = localStorage.getItem("task_counter")
    }
    var current = inputValue.value
    console.log("saving the task to local storage")
    localStorage.setItem("task_" +counter, current)
    inputValue.value=""
    localStorage.setItem("task_counter",++counter) 
    
}