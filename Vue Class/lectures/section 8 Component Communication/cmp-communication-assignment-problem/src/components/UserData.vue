<template>
    <div>
        <div>
          <label>Username: </label>
          <input type="text" v-model="user.username" />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" v-model="user.age" />
        </div>
        <div>
          <button @click="submitData">Add User</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: null,
        age: null,
      },
    };
  },
  methods: {
    submitData() {
      this.$emit("submit", this.user);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
