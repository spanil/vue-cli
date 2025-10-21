<template>
   <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
      
    </div>
   </div> 
</template>
<script setup>
import { onUpdated } from 'vue';
import { onUnmounted } from 'vue';
import { onMounted } from 'vue';
import SinglePost from './SinglePost.vue';

const props = defineProps({
  posts: Array
})
onMounted(() => console.log('component mounted'))
onUnmounted(() => console.log('component Unmounted'))
onUpdated(() => console.log('component updated'))
</script>