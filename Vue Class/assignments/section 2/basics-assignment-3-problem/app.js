const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    computed: {
        result(){
            if (this.number == 37) return '37 ';
            else if (this.number < 37) return 'Not there yet! ';
            else if (this.number > 37) return 'Too much! ';
        }
    },
    watch: {
        result(new_value){
            const that = this;
            setTimeout( () => that.number = 0,5000);
        }
    },
    methods: {
        add(num) {
            this.number = this.number + num;  
        } 
    }
});

app.mount('#assignment');