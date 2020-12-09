const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      goal: ''
    };
  },
  methods: {
    addInputToGoals() {
      this.goals.push(this.goal);
      this.goal = '';
    },
    deleteItem(id){
      this.goals.splice(id, 1);
    }
  }
});

app.mount('#user-goals');
