/* eslint-disable no-unused-vars */

var stopwatch = {
  seconds: 0,
  id: null
}

 function startTimer() {
   stopwatch.id = setInterval(function() {
    var start = stopwatch.seconds++
  }, 1000)
 }
/*
var $startbutt = document.querySelector('#startbutt')
var $secondsTxt = document.querySelector('#seconds')
$startbutt.addEventListener('click', startTimer)
$secondsTxt.textContent = stopwatch.seconds */
