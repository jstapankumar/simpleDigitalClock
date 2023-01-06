let hours = document.getElementsByClassName("hours")
let minutes = document.getElementsByClassName("minutes")
let seconds = document.getElementsByClassName("seconds")

setInterval(function() {

    let d = new Date()
    hours[0].innerHTML = d.getHours()
    minutes[0].innerHTML = d.getMinutes()
    seconds[0].innerHTML = d.getSeconds()

}, 1000);
