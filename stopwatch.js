document.addEventListener("DOMContentLoaded", () => {

    const timeDisplay = document.querySelector(".time-display");
    const startBtn = document.querySelector(".start-btn");
    const stopBtn = document.querySelector(".stop-btn");
    const resetbtn=document.querySelector(".reset-btn")

    let timer = null;

    let startTime = 0;
    let elapsedTime = 0;
    let currentTime = 0;
    let isPlaying = false;

    startBtn.addEventListener("click", () => {
        if (!isPlaying) {
            startTime = Date.now() - elapsedTime;
            isPlaying = true;
            timer = setInterval(updateTimer, 10);
        }
    });

    stopBtn.addEventListener("click", () => {
        if (isPlaying) {
            clearInterval(timer);
            isPlaying = false;
        }
    });
    resetbtn.addEventListener("click",()=>
    {
        
            clearInterval(timer);
            isPlaying = false;
            timeDisplay.textContent="00:00:00";
            startTime = 0;
             elapsedTime = 0;
             currentTime = 0;
       
    })

    function updateTimer() {
        currentTime = Date.now();
        elapsedTime = currentTime - startTime;

        let hour = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
        let min = Math.floor(elapsedTime / (1000 * 60)) % 60;
        let sec = Math.floor(elapsedTime / 1000) % 60;
        let millisec = Math.floor(elapsedTime % 1000);

      
        timeDisplay.textContent = 
            `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }
});
