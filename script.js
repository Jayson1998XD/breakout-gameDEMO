//获取节点
const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");
const canvas = document.getElementById("canvas");


//事件监听
rulesBtn.addEventListener("click", () => rules.classList.add
("show"));

closeBtn.addEventListener("click",() => rules.classList.remove
("show"));