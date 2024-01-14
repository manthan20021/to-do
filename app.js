const leftManue = document.querySelector(".side-manu");
const botamSideBar = document.querySelector(".botatm-manue");
const mayList = document.querySelector(".main-list");

const addTasks = document.querySelector("#task-inpt");
const outputSection = document.querySelector(".TaskList");
const foormElm = document.querySelector(".tasks");
const submetBtn = document.getElementById("sub");
const dropeDouwn = document.querySelector("#dropdown");
let ul = document.querySelector("#sideUl");
const close123 = document.querySelector("#close");

const completeTaskList = document.querySelector(".complete-task");
const copletBtn = document.getElementById("classcomplitLists");
const completClose = document.getElementById("complist-close");
let copletDiv = document.querySelector(".tc-list");
const clearComplitlist = document.getElementById("clear");
const palannBtn = document.querySelector("#plenned");
const palannSection = document.querySelector(".mane-planned");
const greating = document.querySelector(".greating-page")


// document.querySelector("#stertBtn").addEventListener("click", function(){
//   document.querySelector(".overley").style.opacity =  "1"
//   document.querySelector("#inptForm").style.top = "30%"
// })

// document.getElementById("login-close").addEventListener("click", function(){
//   document.querySelector(".overley").style.opacity =  "0"
//   document.querySelector("#inptForm").style.top = "-50%"
// })
 

// document.querySelector(".loginBtn").addEventListener("click", function(e){
//   e.preventDefault()
//  let log1 = document.getElementById("loginpt1")
//  let log2 = document.getElementById("loginpt2")

//  if(log1.value === "manthan" && log2.value == "123321"){
//   document.querySelector(".overley").style.visibility =  "hidden"
//   document.querySelector("#inptForm").style.visibility =  "hidden"
//   document.querySelector(".greating-nav").style.visibility =  "hidden"
//   greating.style.visibility =  "hidden"


//  }
//  else{
//   let passChuck =  document.getElementById("passChuck");
//   passChuck.innerText = "incorrect password"
//   passChuck.style.color = "red"

//   let emailChuck =  document.getElementById("emailChuck");
//   emailChuck.innerText = "incorrect email"
//   emailChuck.style.color = "red"
//  }
  
// })


document.getElementById("ham-berger").addEventListener("click", () => {
  leftManue.classList.add("side-manu2");
  ul.style.display = "flex";
  close123.style.display = "block";
  mayList.style.marginLeft = "287px";
  palannSection.style.marginLeft = "287px";
});

close123.addEventListener("click", () => {
  leftManue.classList.remove("side-manu2");
  ul.style.display = "none";
  close123.style.display = "none";
  mayList.style.marginLeft = "59px";
  palannSection.style.marginLeft = "59px";
});

document.getElementById("mayday").addEventListener("click", () => {
  // e.preventDefault();
  mayList.classList.add("main-list2");
  document.getElementById("allh1").innerHTML = `<h1>MY Day..</h1>`;
  palannSection.style.display = "none";
});

document.getElementById("important").addEventListener("click", function () {
  mayList.classList.add("main-list2");
  document.getElementById(
    "allh1"
  ).innerHTML = `<h1 style="color:#2564CF;">Important.<h1>`;
  palannSection.style.display = "none";
});

palannBtn.addEventListener("click", function () {
  palannSection.style.display = "block";
  mayList.classList.remove("main-list2");
});

//add btn vr evenlisnat lavala.
submetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (addTasks.value != "") {
    listAdd();
  } else {
    alert("pleas enter the task");
  }
  addTasks.value = "";
});

function listAdd() {
  let inptVal = addTasks.value;
  let listItams = document.createElement("li");
  listItams.innerHTML = `<input type="checkbox" name="checkbox" id="checke"> 
      ${inptVal}</i>`;
  outputSection.appendChild(listItams);

  listItams.querySelector("input").addEventListener("click", function () {
    savtask();
    listItams.classList.add("done");
    outputSection.removeChild(listItams);
    let audio = new Audio("mySound.wav");
    audio.play();
  });

  function savtask() {
    let completItams = document.createElement("h6");
    completItams.innerHTML = `${inptVal}`;
    copletDiv.appendChild(completItams);
    copletBtn.style.color = "#2564CF";
  }
}

copletBtn.addEventListener("click", function () { 
  completeTaskList.style.display = "block";
});

completClose.addEventListener("click", function () {
  completeTaskList.style.display = "none";
});

const planneSubBtn = document.getElementById("planne-btn");

const planeTital = document.getElementById("planne-tital");
const planeDiscription = document.getElementById("planne-Discription");
const planeTime = document.getElementById("planne-Time");

const planeContener = document.querySelector(".planListCntenar");

planneSubBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addPlannedList();
  planeTital.value = ""
  planeDiscription.value = ""
  planeTime.value = ""
});


function addPlannedList() {
  let hFour = document.createElement("h4");
  hFour.innerHTML = `${planeTital.value}`;
  planeContener.appendChild(hFour);

  let para = document.createElement("p");
  para.innerHTML = `${planeDiscription.value}`;
  planeContener.appendChild(para);

  let spane = document.createElement("span");
  spane.innerHTML = `${planeTime.value}`;
  planeContener.appendChild(spane);
}












// Now I can say that I made this project,
// Without the help of any tutorial or video.
// There may have been some mistakes, but the project was built with confidence
// There were many problems while making the project, sometimes I thought that the project should be abandoned now, but after solving that problem, I cannot express in words the joy I felt and this joy made me try to make this project better. I am now engrossed in this project just as I was engrossed in play as a child. It felt so good

// Advantages : Good practice of "css" after a long time
// done,
// The concept of html has been revised again,
// Understanding of responsiveness,
// The concept of JavaScript has become stronger today,
// Like "dom ", "events ", "functions ", studied a bit on localstorage but didn't use localstorage in this project, but in future I will explore localstorage and will soon include it in this project.
// Please comment if you have any suggestions or complaints
