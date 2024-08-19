<template lang="">
    <div>
      <h1>This is a login form</h1>  
      <label for="uname">Username:</label>
      <input type="text" id="uname"><br>

      <label for="pword">Password:</label>
      <input type="password" id="pword"><br>

      <button id='btnLogin' @click="submitLogin()">Login</button>

    </div>
</template>
<script>
export default {
    methods: {
        submitLogin(){
            let username = document.getElementById('uname').value
            let password = document.getElementById('pword').value
            return this.$store.dispatch('loginUser', {username: username, password:password})

        }
    },
    
}
</script>
<style>
    
</style>