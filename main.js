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
