<script setup>
import { useFlash } from '@/composables/useFlash';

let  {flash} = useFlash();
</script>

<template>
  <div class="about">
    <p> <button @click="flash('Yah','It Works on the about page','info')">Click Me</button></p>  
  </div>
</template>


