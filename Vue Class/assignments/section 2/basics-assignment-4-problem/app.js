const app = Vue.createApp({
    data(){
        return {
            user_input: '',
            hidden: false,
            user_input2: ''
        };
    },
    computed: {
        outputclass() {
            return [this.user_input , {hidden: this.hidden}];
        },
        inline_style() {
            return "background-color: "+ this.user_input2 + ";";
        }
    },
    methods: {
        toggleVisible(){
            this.hidden = !this.hidden;
        }
    }
});

app.mount('#assignment');