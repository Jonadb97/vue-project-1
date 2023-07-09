<script>
// import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'

const users = ref([])
let username
let mail
let password

export default {
  data() {
    return {
      error: false,
      errorMsg: null,
    }
  },
  mounted() {
  },
  methods: {
    checkError() {
      this.error = false
      this.errorMsg = null
      document.querySelector('#error').classList.add("hidden")
      this.$forceUpdate()
      location.reload()
    },
    async addUser() {
      if (this.username && this.mail && this.password) {
        console.log('Adding user...')
        const { data } = await supabase.from('users').insert({
          username: this.username,
          mail: this.mail,
          password: this.password
        })
        users.value = data
        location.reload()
      } else {
        document.querySelector('#error').classList.remove("hidden")
        this.error == true
        this.errorMsg = 'Por favor llene todos los campos'
        setTimeout(this.checkError, 2000)
      }
    }
  }
}
</script>

<template>
  <div>
    <form action="">
      <label for="">Nombre de usuario</label>
      <input v-model="username" placeholder="Nombre de usuario" type="text" />
      <label for="">Mail</label>
      <input v-model="mail" placeholder="Mail" type="mail" />
      <label for="">Contraseña</label>
      <input v-model="password" placeholder="Contraseña" type="password" />
      <label for="">Confirmar Contraseña</label>
      <input placeholder="Confirme Contraseña" type="password" />
    </form>
    <div :v-if='error' id="error" class="hidden" ref="errorContainer">
      {{ errorMsg }}
    </div>
    <button @click='addUser'>Confirmar</button>
  </div>
</template>

<style scoped>
@import url('../assets/main');

.show {
  display: block;
}

.hidden {
  display: none;
}

#error {
  padding: 1rem;
  background-color: rgb(194, 32, 32);
  border: none;
  border-radius: 5px;
  color: white;
}

button {
  background-color: var(--color);
  color: var(--sub);
  margin: 2rem auto 2rem auto;
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-weight: 900;
  transition: 0.5s;
}

button:hover {
  cursor: pointer;
  box-shadow: 0px 0px 15px var(--sub);
}

form {
  display: flex;
  flex-direction: column;
}

form > label {
  color: var(--color);
  font-weight: 200;
}

form > input {
  background: #1d1d1d33;
  margin: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
}
</style>
