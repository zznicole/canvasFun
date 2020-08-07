let canvas1 = document.getElementById("myCanvas1");
let ctx1 = canvas1.getContext("2d");
ctx1.fillStyle = "#ff0000";
ctx1.fillRect(0,0,100,100);

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);

let canvas3 = document.getElementById
("myCanvas3");
let ctx3 = canvas.getContex(" 2d");
ctx3.fillStyle = "yellow";
ctx3.fillRect = (0,600,200,900);