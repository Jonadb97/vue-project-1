<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<script>
export default {
  name: 'helloworld'
}
</script>

<template>
  <div>
    <h1>Hello post!</h1>
  </div>
</template>