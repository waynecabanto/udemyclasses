<template>
    <ul v-if="user">
      <li>
        <h2>{{ user.username }}</h2>
        <h3>{{ user.age }}</h3>
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    user: {}
  }
};
</script>

<style scoped></style>
