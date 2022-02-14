import '../css/main.css'

const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const checkboxElement = document.querySelector(".theme-checkbox");
const ballElement = document.querySelector(".switch-ball");
const ballCheckbox = document.querySelector(".ball-checkbox");
const container = document.querySelector(".container");
const timeBox = document.querySelector(".current-time-box");

setInterval(() => {
  initClock();
}, 1000);

function initClock() {
  const timeNow = new Date(Date.now());
  const { h, m, s } = properDisplay(timeNow);
  setDisplayContent(hoursElement, h);
  setDisplayContent(minutesElement, m);
  setDisplayContent(secondsElement, s);
}

function properDisplay(time) {
  const h = checkSingleDigitTime(time.getHours());
  const m = checkSingleDigitTime(time.getMinutes());
  const s = checkSingleDigitTime(time.getSeconds());
  return { h, m, s };
}

function setDisplayContent(element, unit) {
  element.textContent = unit;
}

function checkSingleDigitTime(timeUnit) {
  return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}

checkboxElement.addEventListener("click", (e) => {
  if (e.target.checked) {
    ballElement.style.transform = `translateX(39px)`;
    ballCheckbox.checked = true;
  } else {
    ballElement.style.transform = `translateX(0px)`;
    ballCheckbox.checked = false;
  }
  document.body.classList.toggle("bgc-dark");
  container.classList.toggle("container-dark");
  timeBox.classList.toggle("current-time-box-dark");
});

ballCheckbox.addEventListener("click", (e) => {
  if (e.target.checked) {
    ballElement.style.transform = `translateX(39px)`;
    checkboxElement.checked = true;
  } else {
    ballElement.style.transform = `translateX(0px)`;
    checkboxElement.checked = false;
  }
  document.body.classList.toggle("bgc-dark");
  container.classList.toggle("container-dark");
  timeBox.classList.toggle("current-time-box-dark");
});
