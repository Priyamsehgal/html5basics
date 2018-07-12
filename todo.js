var inputValue = document.getElementById('taskValue')
var counter = 1

addTask = function(){
        if(localStorage.getItem("taskCounter") === null){
        localStorage.setItem("taskCounter", counter)
    }else{
        counter = localStorage.getItem("taskCounter")
    }
    var currentTask = inputValue.value
    console.log("saving the task to localstorage")
    localStorage.setItem("task_"+ counter, currentTask)
    inputValue.value=""
    localStorage.setItem("taskCounter",++counter)
    loadTask()
}

    function loadTask()
    {
        console.log("loading the task")
        var container = document.getElementById("taskContainer")
        container.innerHTML = ""
        var newul = document.createElement("ol")
        container.appendChild(newul)
        

        var maxCounter = localStorage.getItem("taskCounter")
        for (var i=1; i<maxCounter; i++){
            var newli = document.createElement("li")
            var currentTask = localStorage.getItem("task_"+ i)
            newli.innerHTML = currentTask
            newul.appendChild(newli)
        }

        /*var newli1 = document.createElement("li")
        newli1.innerHTML = "this one li"
        newul.appendChild(newli)*/
    }

