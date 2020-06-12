import { Vue, Component } from "vue-property-decorator";
import "vue-material-design-icons/styles.css";
import PlayIcon from "vue-material-design-icons/Play.vue";
import PauseIcon from "vue-material-design-icons/Pause.vue";
import DeleteIcon from "vue-material-design-icons/Delete.vue";
import Button from "../Button/index.vue";
import Moment from "moment";

@Component({
    components: { Button, PlayIcon, DeleteIcon, PauseIcon },
    watch: {
        timers: {
            handler: function(value) {
                window.localStorage.setItem("Timers", JSON.stringify(value));
            }
        }
    },
})

export default class TimerComponent extends Vue {
    timerName = "";
    timers = [{
        id: String(1 + Date.now()),
        name: "Timer Name 1",
        value: "00:00:37",
        creationDate: Moment().format("DD/MM/YYYY HH:mm:ss"),
        isActive: true
    }, {
        id: String(2 + Date.now()),
        name: "Timer Name 2",
        value: "00:00:00",
        creationDate: Moment().format("DD/MM/YYYY HH:mm:ss"),
        isActive: true
    }, {
        id: String(3 + Date.now()),
        name: "Timer Name 3",
        value: "00:01:00",
        creationDate: Moment().format("DD/MM/YYYY HH:mm:ss"),
        isActive: false
    }]

    initTimers() {
        this.timers.map((timer) => {
            if (timer.isActive) {
                this.runTimer(timer);
            }
            return false;
        });
    }

    runTimer(timer) {
        timer.value = new Moment(timer.value, "HH:mm:ss").add(1, "s").format("HH:mm:ss");

        if (!timer.setIntervalInstance) {
            timer.setIntervalInstance = setInterval(() => {
                this.runTimer(timer);
            }, 1000);

            let objIndex = this.timers.findIndex((obj => obj.id == timer.id));
            if (!!~objIndex) {
                this.timers[objIndex].isActive = true;
            }
        }
    }

    stopTimer(timer) {
        clearInterval(timer.setIntervalInstance);
        timer.isActive = false;
        timer.setIntervalInstance = false;
        Object.assign(this.timers.find(Timer => Timer.id === timer.id), timer);
        window.localStorage.setItem("Timers", JSON.stringify(this.timers));
    }

    createTimer() {
        const timer = {
            id: Moment(),
            name: this.timerName || Moment().format("DD/MM, HH:mm:ss"),
            value: "00:00:00",
            creationDate: Moment().format("DD/MM/YYYY HH:mm:ss"),
            isActive: true
        }

        if (!this.timers.find(Timer => Timer.name === timer.name)) {
            this.timers.unshift(timer);
        }
        this.runTimer(timer);
    }

    removeTimer(timer) {
        let Timers = JSON.parse(localStorage.getItem("Timers"));
        this.timers = Timers.filter(Timer => Timer.id !== timer.id);
    }

    mounted() {
        this.initTimers();
        window.addEventListener("beforeunload", () => {
            window.localStorage.setItem("Timers", JSON.stringify(this.timers, (key, value) => {
                let maskValue = value;
                if (key === "setIntervalInstance") {
                    maskValue = false;
                }
                return maskValue;
            }));

            localStorage.setItem("savedDate", JSON.stringify(Moment().format("DD/MM/YYYY HH:mm:ss")));
        });
    }

    saveToLS() {
        if (this.timers && this.timers.length) {
            localStorage.setItem("Timers", JSON.stringify(this.timers));
        }
    }

    beforeMount() {
        if (window.localStorage.getItem("Timers")) {
            this.timers = JSON.parse(window.localStorage.getItem("Timers"));
        }
    }

    created() {
        let savedDate =  "06/07/2020 10:30:00";
        if (savedDate) {
            let currentTime = Moment().format("DD/MM/YYYY HH:mm:ss")
            this.timers.map((timer) => {
                let diff = Moment.utc(Moment(currentTime,"DD/MM/YYYY HH:mm:ss").diff(Moment(timer.creationDate,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
                timer.value = new Moment(timer.value, "HH:mm:ss").add(diff, "HH:mm:ss").format("HH:mm:ss");
            });
        }
    }
}


