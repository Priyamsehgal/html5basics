var myCanvas = document.getElementById("artboard")


var canvas = myCanvas.getContext("2d")

/*canvas.moveTo(0, 0)
canvas.lineTo(400, 400)
canvas.stroke()
canvas.strokeText('hello canvas',100,100)*/

canvas.beginPath()
canvas.arc(300,300,50,0,2*Math.PI,true)
canvas.stroke()

canvas.beginPath()
canvas.moveTo(50, 50)
canvas.arc(300)
canvas.stroke()

canvas.beginPath()
canvas.moveTo(50, 50)
canvas.arc(120,120,50,0,2*Math.PI,true)
canvas.stroke()