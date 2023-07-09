<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import FormularioUsuarios from './components/FormularioUsuarios.vue'
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabase'

const users = ref([])

async function getUsernames() {
  const { data } = await supabase.from('users').select()
  users.value = data
}

onMounted(() => {
  getUsernames()
})
</script>

<template>
  <header style="display: flex; justify-content: space-evenly; align-items: center">
    <h1>Hola Vue</h1>
    <h4>Navegación:</h4>
    <ul>
      <li><router-link to='/'>Home</router-link></li>
      <li><router-link to='/helloworld'>Post</router-link></li>
    </ul>
  </header>

  <main style="margin: 0 8rem 0 8rem">
    <router-view />
  </main>
  
</template>

<style scoped>
ul > li > a {
  text-decoration: none;
  list-style-type: none;
}

ul, li {
    list-style-type: none;
    display: inline-flex;
    padding: 1rem;
}

ul > li > a:hover {
  text-decoration: none;
  font-weight: 700;
}
</style>
