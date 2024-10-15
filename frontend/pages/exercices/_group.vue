<template>
    <div>
      <Header />
  
      <div class="exercise-list">
        <h1>Exercises for {{ group }}</h1>
        <div v-if="exercises.length">
          <div v-for="exercise in exercises" :key="exercise.id" class="exercise-card">
            <h3>{{ exercise.name }}</h3>
            <p>{{ exercise.description }}</p>
          </div>
        </div>
        <div v-else>
          <p>Loading exercises...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        group: '',
        exercises: []
      }
    },
    async fetch() {
      this.group = this.$route.params.group;
      
      const response = await this.$axios.$get(
        `https://api.exercisedb.com/group/${this.group}`
      );
      this.exercises = response.exercises;
    }
  }
  </script>
  
  <style scoped>
  .exercise-list {
    text-align: center;
  }
  .exercise-card {
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  </style>
  