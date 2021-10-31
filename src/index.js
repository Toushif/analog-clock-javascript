setInterval(clock, 1000);

const elementSecond = document.querySelector('[toushif-second]')
const elementMinute = document.querySelector('[toushif-minute]')
const elementHour = document.querySelector('[toushif-hour]')

function clock() {
    const date = new Date(),
        second = date.getSeconds()/60,
        minute = (second + date.getMinutes())/60,
        hour = (minute+(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()))/12;
        
    render(elementSecond, second)
    render(elementMinute, minute)
    render(elementHour, hour)
}

function render(element, rotation) {
    element.style.setProperty('--hand-rotate', rotation*360)
}

clock()