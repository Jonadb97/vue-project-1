<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import FormularioUsuarios from './FormularioUsuarios.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'

const users = ref([])

async function getUsernames() {
  const { data } = await supabase.from('users').select()
  users.value = data
}

onMounted(() => {
  getUsernames()
})
</script>

<script>
export default {
  name: 'home'
}
</script>


<template>
  <main style="margin: 0 8rem 0 8rem">
    <h2>A vue webpage.</h2>
    <p>That's about to be connected to supabase...</p>
    <h3>Usuarios:</h3>
    <ul>
      <li v-for="user in users" :key="user.id">Usuario: {{ user.username }}</li>
    </ul>

    <h3>Crear usuario:</h3>
    <FormularioUsuarios></FormularioUsuarios>
  </main>
  <router-view />
</template>
