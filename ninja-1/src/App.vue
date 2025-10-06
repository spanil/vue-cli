<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {Modal },
  data(){
    return {
      title: 'My first vue',
      header: 'Sign up for the giveway',
      text: 'Grab your ninja swag for half price',
      showModal: false
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
  
}
</script>

<template>
    <h1>{{ title }}</h1>
    <p>Welcome.......</p>
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" />
    </div>
    <button @click="toggleModal">Open Modal</button>
    
    <!-- <input type="text" ref="name">
    <button @click="handleClick">Click Me</button> -->  
</template>

<style>
#app{
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
.modal h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
