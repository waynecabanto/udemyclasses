const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      last_name: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      const that = this;
      if (value === 50) {
        setTimeout( () => that.counter = 0, 2000);
         
      }
    }
    // name(value) {
    //   this.fullname = value + ' ' + this.last_name;
    // },
    // last_name(value) {
    //   this.fullname = this.name + ' ' + value;
    // }
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '' || this.last_name === '') {
        return '';
      }
      return this.name + ' ' + this.last_name;
    }
  },
  methods: {
    setFullName() {
      this.fullname = this.name + ' ' + 'Cabanto';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.last_name = '';
    },
    outputFullname() {
      console.log('Running again...');
      return this.fullname === ''? '' : fullname + ' Cabanto';
    }
  }
});

app.mount('#events');
