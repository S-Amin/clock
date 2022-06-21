let alarmTime = null;
let alarmTimeOut = null;
const audio = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
);

audio.loop = true;

function setDates() {
  const handSeconds = document.querySelector(".hand-seconds");
  const handMinutes = document.querySelector(".hand-mintues");
  const handHours = document.querySelector(".hand-hours");

  const now = new Date();

  const seconds = now.getSeconds();
  let secondsDegrees = (seconds / 60) * 360 + 90; //90 offset bcz I added in css
  handSeconds.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  let minutesDegrees = (minutes / 60) * 360 + 90;
  handMinutes.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  let hoursDegrees = ((hours + 1) / 12) * 360 + 90;
  handHours.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDates, 1000);

const alarm = document.getElementById("alarm");

function setAlarmTime(value) {
  alarmTime = value;
  // console.log(alarmTime);
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);
    if (timeToAlarm > current) {
      const timeOut = timeToAlarm.getTime() - current.getTime();
      // to set an alarm => setTimeout(event, time)
      alarmTimeOut = setTimeout(() => audio.play(), timeOut);
      alert("Alarm set");
    }
  }
}

function ClearAlarm() {
  audio.pause();
  if (alarmTimeOut) {
    // clearTimeout(tiner out should be a timer type that's why we stored in alarmTimeOut);
    clearTimeout(alarmTimeOut);
    alert("alarmed cleared");
  }
}
