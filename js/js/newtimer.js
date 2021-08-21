var countDownDate = new Date("Aug 24, 2021 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

var date = new Date();
// convert to milliseconds, add local time zone offset and get UTC time in milliseconds
  var utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  
// time offset for New Zealand is +12
  var timeOffset = 0;

// create new Date object for a different timezone using supplied its GMT offset.


  // Get today's date and time
  var now = new Date(utcTime + (3600000 * timeOffset)).getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = ('0' + hours).slice(-2);
  document.getElementById("minutes").innerHTML = ('0' + minutes).slice(-2);
  document.getElementById("seconds").innerHTML = ('0' + seconds).slice(-2);

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);