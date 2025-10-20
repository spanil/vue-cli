<template>
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>REactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja Two</button>
    <p>{{ fname }}</p>
    <input type="text" v-model="search">
    <p>search term -- {{ search }}</p>
    <div v-for="fname in matchingNames" :key="fname">{{ fname }}</div>
    <button @click="handleClick">Stop Watch</button>
    
</template>
<script setup>
import { ref,reactive, computed, watch, watchEffect } from 'vue';


const ninjaOne = ref({name: 'mario', age: 30})
const ninjaTwo = reactive({name: 'aaa', age: 40})
const updateNinjaOne = () => {
    ninjaOne.value.age = 60
}
const updateNinjaTwo = () => {
    ninjaTwo.age = 80
}
const fname = computed(() => {
    return 'fname shaun'
}) 
const fnames = ref(['hari','shyam','ram','krishna','sita','gopal','sameeta'])
const search = ref('')
const matchingNames = computed(() => {
    return fnames.value.filter((fname) => fname.includes(search.value))
})
const stopWatch = watch(search,() => {
    console.log('watch function ran')
})
const stopEffect = watchEffect(()=>{
    console.log('watcheffect function ran',search.value)
})
const handleClick = () => {
stopWatch()
stopEffect()
}
</script>