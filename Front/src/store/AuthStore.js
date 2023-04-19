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
      if (response.status == true) {
        this.token = response.token
      } else {
        this.token = null
      }

      return response
    }
  }
  })

  export default useAuth