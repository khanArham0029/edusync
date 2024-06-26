<template>
  <h1>Sign Up</h1>

  <div class="signupRegister">
    <input type="text" placeholder="Enter Name" />
    <input type="email" placeholder="Enter Email" />
    <input type="password" placeholder="Enter Password" />
    <button>Sign Up</button>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

.alfa-slab-one-regular {
  font-family: 'Alfa Slab One', serif;
  font-weight: 400;
  font-style: normal;
}
.signupRegister {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}
.signupRegister input {
  width: 300px;
  height: auto;
}

h1 {
  font-family: 'Alfa Slab One', cursive;
}
</style>
