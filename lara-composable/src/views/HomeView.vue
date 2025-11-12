<script setup>
import { useFlash } from '@/composables/useFlash';
import { ref } from 'vue';
let food = ref(localStorage.getItem('food'));
let age = ref(localStorage.getItem('age'));

let  {flash} = useFlash();
function write(key, val){
  localStorage.setItem(key,val)
}
</script>

<template>
  <main>
    <p>
      what is your favourite food? <input type="text" v-model="food" @input="write('food',food)">
    </p>
    <p>
      How Old are you ? <input type="text" v-model="age" @input="write('age',age)">
    </p>
  <p> <button @click="flash('Test','It Works!')">Click Me</button></p>  
  </main>
</template>
