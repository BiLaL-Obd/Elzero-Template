// Add Class Show To MenuBar
let otherLinks = document.querySelector(".otherLinks");
let menuBar = document.querySelector(".menu");
let angle = document.querySelector(".angle");

otherLinks.onclick = function () {
  menuBar.classList.toggle("show");
  if (menuBar.classList.contains("show")) {
    angle.classList.remove("fa-angle-down");
    angle.classList.add("fa-angle-up");
  } else {
    angle.classList.add("fa-angle-down");
    angle.classList.remove("fa-angle-up");
  }
};

// Check if MenuBar is Open
document.addEventListener("click", (e) => {
  if (e.target !== otherLinks) {
    if (menuBar.classList.contains("show")) {
      menuBar.classList.toggle("show");
      if (menuBar.classList.contains("show")) {
        angle.classList.remove("fa-angle-down");
        angle.classList.add("fa-angle-up");
      } else {
        angle.classList.add("fa-angle-down");
        angle.classList.remove("fa-angle-up");
      }
    }
  }
});

// Stop Propagation On Menu
menuBar.onclick = function (e) {
  e.stopPropagation();
};

// Add Class Clicked To Bar Menu
let barMenu = document.querySelector(".fa-bars.bar");
barMenu.onclick = function () {
  this.classList.toggle("clicked");
};

// Check if navigation is Open
document.addEventListener("click", function (e) {
  if (e.target !== barMenu) {
    if (barMenu.classList.contains("clicked")) {
      barMenu.classList.toggle("clicked");
    }
  }
});

// Stop Propagation On Navigation
document.querySelector(".navigation").onclick = function (e) {
  e.stopPropagation();
};

// Section Event
let yearNow = new Date().getFullYear();
document.querySelector(".events .box .info .year").innerHTML = yearNow;
let birthDay = new Date(`Dec 31,${yearNow} 23:59:59`).getTime();

let counterBirthday = setInterval(function () {
  let dateNow = new Date().getTime();
  let dateDiff = birthDay - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".time .unit .days").innerHTML =
    days < 10 ? `0${days}` : days;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".time .unit .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".time .unit .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".time .unit .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// Section Stats
let statSection = document.querySelector(".stats");
let statNums = document.querySelectorAll(".stat .number");
let started = false;
function counterStats(ele) {
  let goals = ele.dataset.goal;
  let counter = setInterval(function () {
    ele.textContent++;
    if (ele.textContent == goals) {
      clearInterval(counter);
    }
  }, 2000 / goals);
}

let skillSect = document.querySelector(".skills");
let spanSkill = document.querySelectorAll(".skills .skill span");
window.onscroll = function () {
  // On Scrolling Remove Class (show) from MenuBar
  if (window.scrollY >= 550) {
    menuBar.classList.remove("show");
    angle.classList.remove("fa-angle-up");
    angle.classList.add("fa-angle-down");
  }

  // Scrolling To Skills
  if (window.scrollY >= skillSect.offsetTop - 200) {
    spanSkill.forEach((span) => {
      span.style.width = span.dataset.prog;
    });
  }

  //Scrolling for Stats
  if (window.scrollY >= statSection.offsetTop - 100) {
    if (!started) {
      statNums.forEach((span) => counterStats(span));
    }
    started = true;
  }
};
