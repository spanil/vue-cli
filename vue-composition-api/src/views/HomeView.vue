<template>
<p>Home</p>
<!-- <p ref="p">My name is {{ name }} and age is {{ age }}</p> -->
<p>My name is {{ name }} and age is {{ age }}</p>
<button @click="handleClick">click me</button>
<button @click="age++">add 1 to age</button>
<input type="text" v-model="name">
</template>
<script setup>
import { ref } from 'vue'
    const name = ref('Mario')
    const age = ref(25)
    const p =ref(null)
    console.log(p,p.value)

    const handleClick = () => {
    console.log(p,p.value)
    // p.value.classList.add('test')
    // p.value.textContent = 'hello ninjas'
    name.value = 'Hari'
    age.value = 30
  }
</script>



