//获取节点
const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");
const canvas = document.getElementById("canvas");


const ctx =canvas.getContext("2d");

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

//创建球

const ball = {
  x:canvas.width/2,
  y:canvas.height/2,
  size:10,
  speed:5,
  dx:5,
  dy:-5
};


//创建挡板

 const table = {
   x:canvas.width/2 -40,
   y:canvas.height -20,
   w:80,
   h:10,
   speed:8,
   dx:0
 };

//绘制球
function drawBell(){
  ctx.beginPath();
  ctx.arc(ball.x,ball.y,ball.size,0,Math.PI*2);
  ctx.fillStyle = "#333";
  ctx.fill();
  ctx.closePath();
}


//绘制挡板

function drawTable() {
  ctx.beginPath();
  ctx.rect(table.x,table.y,table.w,table.h);
  ctx.fillStyle= "#333";
  ctx.fill();
  ctx.closePath();
}


//创建单个方块
const paddle = {
  w:70,
  h:20,
  padding:10,
  offsetX:45,
  offsetY:60,
  visible:true
}

//绘制每个方块的坐标
const bricks = [];
for(let i = 0; i < brickRowCount ; i++){
  bricks[i] = [];
  for(let j = 0; j < brickColumnCount; j++){
    const x =i  * (paddle.w + paddle.padding) +paddle.offsetX;
    const y =j * (paddle.h + paddle.padding) +paddle.offsetY;
    bricks[i][j] = { x, y, ...paddle };
  }
}

console.log(bricks);

//绘制所以方块

function drawBricks() {
  bricks.forEach(column => {
     column.forEach(bricks => {
       ctx.beginPath();
       ctx.rect(bricks.x,bricks.y, bricks.w , bricks.h);
       ctx.fillStyle = bricks.visible ? "#333" : "transparent";
       ctx.fill();
       ctx.closePath();
     });
  });
}

//绘制得分
function scores() {
    ctx.font= "20px Arial";
    ctx.fillText(`得分：${score}`, canvas.width - 100,30);
}


//绘制函数
function draw(){
  drawBell();
  drawTable();
  drawBricks();
  scores();
}

draw();



//事件监听
rulesBtn.addEventListener("click", () => rules.classList.add
("show"));

closeBtn.addEventListener("click",() => rules.classList.remove
("show"));