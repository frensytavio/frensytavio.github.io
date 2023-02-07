class CountdownTimer {
    // setup timer values
    constructor({ targetDate, backgroundColor = null, foregroundColor = null }) {
        this.targetDate = targetDate;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;

        // grab divs on frontend using supplied selector ID
        this.refs = {
            days: document.getElementById("clock-days"),
            hours: document.getElementById("clock-hours"),
            mins: document.getElementById("clock-minutes"),
            secs: document.getElementById("clock-seconds"),
        };
    }

    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((total / 1000 / 60) % 60);
        const secs = Math.floor((total / 1000) % 60);
        return {
            total,
            days,
            hours,
            mins,
            secs,
        };
    }

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }

    startTimer() {
        const timer = this.getTimeRemaining(this.targetDate);
        this.updateTimer(timer);
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate);
            this.updateTimer(timer);
        }, 1000);
    }
}

const timer = new CountdownTimer({
    targetDate: new Date("August, 12 2023 00:00:00")
});

timer.startTimer();