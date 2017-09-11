/* eslint-disable no-unused-vars */

var stopwatch = {
  seconds: 0,
  id: null
}
var $startbutton = document.querySelector('#startbutton')
var $stopbutton = document.querySelector('#stopbutton')

function startTimer() {
  stopwatch.id = setInterval(function() {
    var start = stopwatch.seconds++
  }, 1000)
}

function secondsRender() {
  setInterval(function() {
    var $seconds = document.querySelector('#seconds')
    $seconds.textContent = stopwatch.seconds
  }, 16)
}
function stop() {
  clearInterval(stopwatch.id)
}
$startbutton.addEventListener('click', startTimer)
$stopbutton.addEventListener('click', stop)
secondsRender()
