<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {Modal },
  data(){
    return {
      title: 'My first vue',      
      showModal: false,
      showModalTwo : false,
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
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
  
}
</script>

<template>
    <h1>{{ title }}</h1>
    <p>Welcome.......</p>
    <teleport to=".modals" v-if="showModal">
      <Modal  theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">Sign Up</a>
          <a href="#">More info.</a>
        </template>
        <h1>Ninja Giveaway!</h1>
        <p>Grab your ninja swag for half price!</p>
      </Modal>
      </teleport>
      <div v-if="showModalTwo">
      <Modal  theme="sale" @close="toggleModalTwo">
       
        <h1>Second Model!</h1>
        <p>Second Modal Practise </p>
      </Modal>
    </div>
    <button @click.alt="toggleModal ">Open Modal Two(alt)</button>
    <button @click="toggleModalTwo">Open Modal Two(alt)</button>
    
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
