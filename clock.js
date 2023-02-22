// targeting class hand second-hand
const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.minute-hand');
const hrHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds)
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours();
    console.log("this is the hours: "+ hours);
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hrHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(now);
}


setInterval(setDate, 1000,secHand)