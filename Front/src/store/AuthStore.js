import { defineStore } from "pinia";


const useAuth = defineStore('authStore', {
  state: () => {
    return {
      token: null,
      ulrServe: 'http://127.0.0.1:8000/api',
      role: null
    }
  },

  actions: {
    async login(email, password) {
      const url = `${this.ulrServe}/auth/login`
      const rawresponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      })

      const response = await rawresponse.json()
      console.log(response)
      if (response.status == true) {
        this.token = response.token
      } else {
        this.token = null
      }

      return response
    },

    async register(name, email, password, phone) {
      const url = `http://127.0.0.1:8000/api/auth/register`
      const rawresponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json'
        },
        body: JSON.stringify({
          'name': name,
          'email': email,
          'password': password,
          'phone': phone
        })
      })

      const response = await rawresponse.json()
      if (response.status == true) {
        this.token = response.token
      } else {
        this.token = null
      }

      return response
    },

    async index (){
      const url = `${this.ulrServe}/users`
      const rawresponse = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'Accept': 'Application/json'
        }
      })

      const response = await rawresponse.json()
      console.log(response)
      return response
    }
  },
  persist:{
    storage: sessionStorage,
    path: ['token']
  }
  })

  export default useAuth