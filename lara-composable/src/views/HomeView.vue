<script setup>
import { useFlash } from '@/composables/useFlash';
import { useStorage } from '@/composables/useStorage';
// let  {flash} = useFlash();
let food = useStorage('food','salad');
let age = useStorage('age',10);


// let food = ref(localStorage.getItem('food'));
// let age = ref(localStorage.getItem('age'));


// function write(key, val){
//   localStorage.setItem(key,val)
// }
// watch(food,(val)=>{
//   write('food',val)
// })
// watch(age,(val)=>{
//   write('age',val)
// })
// setTimeout(()=>{
// food.value = 'changed';
// },2000)
</script>

<template>
  <main>
    <p>
      what is your favourite food? <input type="text" v-model="food">
    </p>
    <p>
      How old are you ? <input type="text" v-model="age">
    </p>
    <!-- <p>
      How Old are you ? <input type="text" v-model="age" >
    </p> -->
  <p> <button @click="flash('Test','It Works!')">Click Me</button></p>  
  </main>
</template>
