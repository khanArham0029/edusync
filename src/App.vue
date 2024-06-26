<template>
  <img alt="Edusync logo" src="./assets/Edusync.png" />
  <button @click="SignUp">Sign Up</button>
  <button @click="goToLogin">Login</button>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToSignUp() {
      this.$router.push({ name: 'SignUp' })
    },
    goToLogin() {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
