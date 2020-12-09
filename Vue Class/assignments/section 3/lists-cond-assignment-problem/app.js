const app = Vue.createApp({
    data(){
        return {
            task: '',
            task_list: [],
            hidden: true
        };
    },
    computed: {
        c_buttonName() {
            return this.hidden ? "Hide List" : "Show List";
        }
    },
    methods: {
        addTask(){
            this.task_list.push(this.task);
            this.task = '';
        },
        deleteTask(index) {
            this.task_list.splice(index, 1);
        },
        hideOrShowList() {
            this.hidden = !this.hidden;
        }
    }
});

app.mount('#assignment');