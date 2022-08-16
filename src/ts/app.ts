const hoursElement = document.querySelector(".hours") as HTMLElement;
const minutesElement = document.querySelector(".minutes") as HTMLElement;
const secondsElement = document.querySelector(".seconds") as HTMLElement;
const checkboxElement = document.querySelector(".theme-checkbox") as HTMLElement;
const ballElement = document.querySelector(".switch-ball") as HTMLElement;
const ballCheckbox = document.querySelector(".ball-checkbox") as HTMLElement;
const container = document.querySelector(".container") as HTMLElement;
const timeBox = document.querySelector(".current-time-box") as HTMLElement;

function loadTime(){
  const timeNow = new Date(Date.now());
  const { h, m, s } = properDisplay(timeNow);
  setDisplayContent(hoursElement, h);
  setDisplayContent(minutesElement, m);
  setDisplayContent(secondsElement, s);
}

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

function properDisplay(time : Date) {
  const h = checkSingleDigitTime(time.getHours());
  const m = checkSingleDigitTime(time.getMinutes());
  const s = checkSingleDigitTime(time.getSeconds());
  return { h, m, s };
}

function setDisplayContent(element : HTMLElement, unit: string) {
  element.textContent = unit;
}

function checkSingleDigitTime(timeUnit : number): string {
  return timeUnit < 10 ? `0${timeUnit}` : String(timeUnit);
}

checkboxElement.addEventListener("click", (e: Event) => {
   const checked = (e.target as HTMLInputElement).checked;

    if (checked) {
    ballElement.style.transform = `translateX(39px)`;
    (ballCheckbox as HTMLInputElement).checked = true;
  } else {
    ballElement.style.transform = `translateX(0px)`;
    (ballCheckbox as HTMLInputElement).checked = false;
  }
  document.body.classList.toggle("bgc-dark");
  container.classList.toggle("container-dark");
  timeBox.classList.toggle("current-time-box-dark");
});

ballCheckbox.addEventListener("click", (e) => {
  const checked = (e.target as HTMLInputElement).checked;
  if (checked) {
    ballElement.style.transform = `translateX(39px)`;
    (checkboxElement as HTMLInputElement).checked = true;
  } else {
    ballElement.style.transform = `translateX(0px)`;
    (checkboxElement as HTMLInputElement).checked = false;
  }
  document.body.classList.toggle("bgc-dark");
  container.classList.toggle("container-dark");
  timeBox.classList.toggle("current-time-box-dark");
});

loadTime();