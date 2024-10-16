<template>
  <div>
    <Header />

    <div class="exercises-container">
      <h2>Exercises for {{ $route.params.bodyPart }}</h2>

      <div class="exercise-list">
        <div v-for="exercise in exercises" :key="exercise.id" class="exercise-card">
          {{ exercise.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    try {
      const exercises = await $axios.$get(`/api/exercises/${params.bodyPart}`);
      return { exercises };
    } catch (error) {
      console.error('Error fetching exercises:', error);
      return { exercises: [] };
    }
  },
  data() {
    return {
      exercises: [],
    };
  },
};
</script>

<style scoped>
.exercises-container {
  text-align: center;
}

.exercise-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.exercise-card {
  margin: 10px;
  padding: 20px;
  background-color: #e3e3e3;
  border-radius: 8px;
}
</style>

  