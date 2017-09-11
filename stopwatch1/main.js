/* eslint-disable no-unused-vars */

var stopwatch = {
  seconds: 0,
  id: null
}
var $startbutton = document.querySelector('#startbutton')
var $stopbutton = document.querySelector('#stopbutton')
var $resetbutton = document.querySelector('#resetbutton')

function startTimer() {
  if (stopwatch.seconds >= 0) {
    stopwatch.id = setInterval(function() {
    stopwatch.seconds++
    }, 1000)
  }
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
function reset() {
  stopwatch.seconds = 0
}
$resetbutton.addEventListener('click', reset)
$startbutton.addEventListener('click', startTimer)
$stopbutton.addEventListener('click', stop)
secondsRender()
