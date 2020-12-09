const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected };
        }
    },
    methods: {
        boxSelected(box_selected) {
            if (box_selected === 'A') this.boxASelected = !this.boxASelected;
            else if (box_selected === 'B') this.boxBSelected = !this.boxBSelected;
            else if (box_selected === 'C') this.boxCSelected = !this.boxCSelected;
        }
    }
});

app.mount('#styling');