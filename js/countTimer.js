import refs from './refs.js'

const { daysContent, hoursContent, minsContent, secsContent } = refs;

class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = null;
        this.deltaTime = 0;
    }
    start() {
        setInterval(() => {
            let currentDate = Date.now();

            this.deltaTime = this.targetDate - currentDate;
            this.insertData(daysContent, this.getDaysCount(this.deltaTime))
            this.insertData(hoursContent, this.getHoursCount(this.deltaTime))
            this.insertData(minsContent, this.getMinsCount(this.deltaTime))
            this.insertData(secsContent, this.getSecsCount(this.deltaTime))
         }, 1000)
        
    }

     finish() {
    clearInterval(this.intervalID)
    this.clearClockFace()
  }
  // ============
  clearClockFace() {
    daysContent.textContent = '00'
    hoursContent.textContent = '00'
    minsContent.textContent = '00'
    secondsContent.textContent = '00'
  }

     padValue(value, num, symbol) {
        return String(value).padStart(num, symbol)
    }
    getDaysCount(time) {
        return this.padValue(Math.floor(time / (1000 * 60 * 60 * 24)), 3, '0')
    }
    getHoursCount(time) {
        return this.padValue(Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)), 2, '0')
    }
    getMinsCount(time) {
        return this.padValue(Math.floor(time % (1000 * 60 * 60) / (1000 * 60)), 2, '0')
    }
    getSecsCount(time) {
        return this.padValue(Math.floor(time % (1000 * 60) / (1000)), 2, '0')
    }
    
    insertData(place, value) {
    place.textContent = value
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});
timer.start(timer);