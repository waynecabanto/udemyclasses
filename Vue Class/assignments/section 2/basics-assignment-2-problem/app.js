const app = Vue.createApp({
    data() {
        return {
            user_output: '',
            user_output_on_enter: ''
        };
    },
    methods: {
        showAlert() {
            alert('Button Show Alert pressed.');
        },
        outputUserInputOnKeydown(event) {
            this.user_output = event.target.value;
        },
        outputUserInputOnEnter(event) {
            this.user_output_on_enter = event.target.value;
        }
    }
});

app.mount("#assignment");