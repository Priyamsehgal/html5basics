function dragStartNow (e){
    console.log("On drag event is called")
    e.dataTransfer.setData("sourceId", e.target.id)
}
function dragOverNow(e){
    e.preventDefault()
    console.log("Im dragging")
}
function dropNow(e){
    e.preventDefault()
    console.log("im being dropped on div2")
    var temp = e.dataTransfer.getData("sourceId")
    var tempImg = document.getElementById(temp)
    e.target.appendChild(tempImg)
}

/*function sourceDrop(e)
{
    e.preventDefault()
    console.log("dropped back")
    var back = e.dataTransfer.getData("sourceId")
    var backImp = document.getElementById(back)
    e.target.appendChild(backImp)
}*/