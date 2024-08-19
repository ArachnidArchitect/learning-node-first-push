import { createStore } from 'vuex'
import cookies from 'vue-cookies'

export default createStore({
  state: {
    serveResponse:null,
    users: null,
    fruits:null,
    
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload
    },
    setFruits(state, payload){
      state.fruits = payload
    },
    setServeResponse(state,payload){
      state.serveResponse = payload
    }
  },
  actions: {
    async fetchFruits({commit}){
      let res = await fetch('http://localhost:5005/fetchFruits')
      let fruits = await res.json()
      

      commit('setFruits', fruits)
    },
    async fetchUsers({commit}){
      let res = await fetch('http://localhost:5005/fetchUsers')
      let users = await res.json()
      

      commit('setUsers', users)
    },

    async registerUser({commit},{name,surname,age,fav_coding_lang, fav_car, eye_color, username, password}){
      let res = await fetch('http://localhost:5005/insert', {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'cookie': cookies.get('token')
        },
        body:JSON.stringify({
          name:name, surname:surname, age:age, fav_coding_lang:fav_coding_lang, fav_car:fav_car, eye_color:eye_color, username:username, password:password
        }),
        credentials:'include'
      },
    )
      let data = await res.json()
       commit('setServeResponse', data)
       console.log('im working')
    },

    async loginUser({commit}, {username, password}){
      let res = await fetch('http://localhost:5005/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          username:username, password:password
        })
      },)
      let data = await res.json()
      cookies.set('token',data.token)
      commit('setServeResponse', data)
      alert(data.message)
      console.log(data)


      
    }
  },
  modules: {
  }
})
