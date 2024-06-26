<template>
  <div class="container">
    <h1>Log In</h1>
    <div class="signup-form">
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Create a password" />
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}

.logo img {
  width: 10vw;
  max-width: 120px;
  margin-bottom: 5vh;
}

h1 {
  font-size: 4vh;
  color: white;
  margin-bottom: 3vh;
}

.signup-form {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

.signup-form input,
.signup-form button {
  padding: 2vh;
  border: none;
  border-radius: 8px;
  font-size: 2.5vh;
}

.signup-form button {
  background-color: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.signup-form button:hover {
  background-color: #0056b3;
}
</style>
