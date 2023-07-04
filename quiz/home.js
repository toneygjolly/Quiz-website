const  startTime =()=>{

  
    window.location.href = "index.html";
}
window.onload = function() {
    var timer = document.getElementById('timer');
    var startTimer = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    //var resetButton = document.getElementById('reset');

    var startTime;
    var elapsedTime = 0;
    var timerInterval;

    function startTimer() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
        startTimer.disabled = true;
    }

    function stopTimer() {
        clearInterval(timerInterval);
        startTimer.disabled = false;
    }

    //function resetTimer() {
      //  clearInterval(timerInterval);
        //elapsedTime = 0;
        //updateTimer();
        //startButton.disabled = false;
    //}

    function updateTimer() {
        var currentTime = Date.now();
        elapsedTime = currentTime - startTime;
        var formattedTime = formatTime(elapsedTime);
        timer.textContent = formattedTime;
    }

    function formatTime(time) {
        var milliseconds = Math.floor((time % 1000) / 10);
        var seconds = Math.floor((time / 1000) % 60);
        var minutes = Math.floor((time / (1000 * 60)) % 60);
        var hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        return (
            (hours > 9 ? hours : '0' + hours) +
            ':' +
            (minutes > 9 ? minutes : '0' + minutes) +
            ':' +
            (seconds > 9 ? seconds : '0' + seconds) +
            '.' +
            (milliseconds > 9 ? milliseconds : '0' + milliseconds)
        );
    }

    startTimer.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    //resetButton.addEventListener('click', resetTimer);
};
