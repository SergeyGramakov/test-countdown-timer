const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timeInterval;

const addZeroBefore = (num) => num <= 9 ? '0' + num : num;

function updateCountdown(time) {
    const updateTime = () => {
        time--;

        let seconds = addZeroBefore(Math.floor(time % 60)),
        minutes = addZeroBefore(Math.floor((time / 60) % 60)),
        hours = addZeroBefore(Math.floor((time / 60 / 60) % 24));
        
        if (time <= 0) {
            clearInterval(timeInterval);
            timerEl.textContent = `00:00:00`;
        }
        
        timerEl.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    updateTime();
    timeInterval = setInterval(updateTime, 1000)
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {  
        updateCountdown(seconds);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    inputEl.value = inputEl.value.replace(/\D/, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value) + 1;

    if (timeInterval) {
        clearInterval(timeInterval);
    }

    animateTimer(seconds);

    inputEl.value = '';
});