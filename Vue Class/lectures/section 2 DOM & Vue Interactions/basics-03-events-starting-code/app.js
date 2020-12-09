const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmed_name: "",
    };
  },
  methods: {
    confirmName() {
      this.confirmed_name = this.name;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event, last_name) {
      this.name = event.target.value + " " + last_name;
    },
    submitForm() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
