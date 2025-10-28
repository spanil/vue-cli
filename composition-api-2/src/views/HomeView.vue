
<template>
  <h1>Home</h1>
  <div v-if="posts.length">
  <PostList v-if="showPosts" :posts="posts" />
</div>
<div v-else>Loading....</div>
  <button @click="showPosts = !showPosts">toggle posts</button>
  <button @click="posts.pop()">Delete Post</button>
  <div v-if="error">{{ error }}</div>
</template>
  
<script setup>
import PostList from '@/components/PostList.vue';
import { ref } from "vue"
import getposts from '@/composables/getPosts';
const{posts,error,load} = getposts()
load()
const showPosts = ref(true)
</script>
