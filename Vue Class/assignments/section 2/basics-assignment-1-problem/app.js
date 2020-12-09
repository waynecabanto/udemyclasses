const app = Vue.createApp({
    data(){
        return {
            personal_details: {
                name: "Wayne Cabanto",
                age: 21
            },
            image_url: "https://i.pinimg.com/originals/d6/03/4f/d6034f6885ffd81f59ebae97e3118bc4.jpg"
        }
    },
    methods: {
        ageInFiveYears () {
            return this.personal_details.age + 5;
        },
        faveNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');