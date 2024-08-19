<template>
  <div class="register-template">
    <fieldset>
      
      <legend>Register</legend>
    <legend><strong>About Me</strong></legend>
    <hr>
      <input type="text" placeholder="Name" id="name"><br>
      <input type="text" placeholder="Surname" id="surname"><br>
      <input type="text" placeholder="Age" id="age"><br>

      <label for="fav_coding_lang">My Favourite Language:</label><br>
  <select name="fav_coding_lang" id="fav_coding_lang">
      <option value="">options</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="js">JavaScript</option>
      <option value="vue">Vue Js</option>
      <option value="sql">MySQL</option>
      <option value="python">Python</option>
      </select><br>

      

      <input type="text" placeholder="My favourite car..." id="fav_car"><br>
      <input type="text" placeholder="My eye color?!" id="eye_color">

    <hr>
    <legend><strong>Login Information</strong></legend>
    <hr>
    <input type="text" placeholder="Username" id="usernameInput"><br>
    <input type="text" placeholder="Password" id="PasswordInput"><br><hr>
    <button @click="registerUser()">Sign Up</button>
    </fieldset>

  </div>
</template>
<script>

export default{
  methods: {
    registerUser(){
     let name = document.getElementById('name').value
     
     let surname = document.getElementById('surname').value
     let age = document.getElementById('age').value
     let fav_coding_lang = document.getElementById('fav_coding_lang').value
     let fav_car = document.getElementById('fav_car').value
     let eye_color = document.getElementById('eye_color').value
     let username = document.getElementById('usernameInput').value
    //  console.log(password);
     let password = document.getElementById('PasswordInput').value
      return this.$store.dispatch('registerUser', {name : name, surname:surname, age:age, fav_coding_lang:fav_coding_lang, fav_car, eye_color, username: username, password:password})
    }
  },
  computed:{
   
    
  },
  mounted() {
    // this.registerUser
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
div.register-template{
  background-color: #FFFFE4;
}
fieldset{
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  width: 15em;
  padding: 2em;
  margin: 0 auto;
  background-color: white;
}
fieldset >*{
  margin: .7em;
}

</style>