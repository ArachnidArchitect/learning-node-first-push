<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <center>
      <div class="hidden-content" v-if="$cookies.get('token')">
        <button @click="showUsers = !showUsers">All User Informations</button><br>
        
        <table border="1px" v-show="showUsers">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
            <th>age</th>
            <th>fav_coding_lang</th>
            <th>fav_car</th>
            <th>eye_color</th>
            <th>username</th>
            <th>password</th>
          </tr>
          <tr v-for="user in allUsers()" :key="user">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.fav_coding_lang }}</td>
            <td>{{ user.fav_car }}</td>
            <td>{{ user.eye_color }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
          </tr>
        </table>
      
      <button @click="showFruits = !showFruits">Show fruits</button>
      <table border="1px" v-show="showFruits">
        <tr>
          <th>id</th>
          <th>fruit_name</th>
          <th>weight</th>
          <th>amount</th>
          <th>Purchase Item</th>
        </tr>
        <tr v-for="fruit in allFruits()" :key="fruit">
          <td>{{ fruit.id }}</td>
          <td>{{ fruit.fruit_name }}</td>
          <td>{{ fruit.weight }}</td>
          <td>{{ fruit.amount }}</td>
          <td><button @click="p">Purchase Item</button></td>
        </tr>
      </table>
      </div>
    </center>
    
 
    <!-- {{ this.$store.state.users }} -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      showUsers: false,
      showFruits: false,
    };
  },
  components: {},
  methods: {
    allUsers() {
      return this.$store.state.users;
    },
    allFruits() {
      return this.$store.state.fruits;
    },
  },
  computed: {
    fetchUsers() {
      return this.$store.dispatch("fetchUsers");
    },
    fetchFruits() {
      return this.$store.dispatch("fetchFruits");
    },
  },
  mounted() {
    this.fetchUsers;
    this.fetchFruits;
  },
};
</script>
