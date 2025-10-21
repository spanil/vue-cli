
<template>
  <h1>Home</h1>
  <PostList :posts="posts" />
</template>
  
<script setup>
import PostList from '@/components/PostList.vue';
import { ref } from 'vue';
const posts = ref([
  {title: 'Welcome to the blog',body: 'Lorem ipsum',id: 1},
  {title: 'top 5 css',body: 'Lorem ipsum',id: 2},
])
</script>
