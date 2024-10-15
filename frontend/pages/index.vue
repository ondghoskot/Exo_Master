<template>
    <div>
      <Header />
  
      <div class="hero">
        <h1>Select a Muscle Group</h1>
      </div>
  
      <div class="muscle-groups">
        <div v-for="group in muscleGroups" :key="group" class="muscle-card">
          <nuxt-link :to="`/exercises/${group}`">{{ group }}</nuxt-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue'
  
  export default {
    components: {
      Header
    },
    data() {
      return {
        muscleGroups: [
          'Chest', 'Back', 'Legs', 'Arms', 'Shoulders', 'Core'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .hero {
    text-align: center;
    margin: 20px 0;
  }
  .muscle-groups {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .muscle-card {
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  </style>
  