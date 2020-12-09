const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn vue.',
            // courseGoalB: '<h2 style="color: black;">Master vue and build an app.</h2>',
            courseGoalB: 'Master vue and build an app.',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
        }
    }
});

app.mount('#user-goal');