/* eslint-disable no-unused-vars */

var stopwatch = {
  seconds: 0,
  id: null
}

var $startbutton = document.querySelector('#startbutton')

function secondsRender() {
setInterval(function(){
  var $seconds = document.querySelector('#seconds')
  $seconds.textContent = stopwatch.seconds
}, 16)
}

function startTimer() {
  stopwatch.id = setInterval(function() {
    var start = stopwatch.seconds++
  }, 1000)
}
$startbutton.addEventListener('click', startTimer)
secondsRender()
