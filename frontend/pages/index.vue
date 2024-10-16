<template>
  <div>
    <Header />

    <div class="hero">
      <h1>Select a Muscle Group</h1>
    </div>

    <div class="muscle-groups">
      <!-- Loop over the muscle groups and make them clickable -->
      <div
        v-for="group in muscleGroups"
        :key="group"
        class="muscle-card"
      >
        <nuxt-link :to="`/exercises/${group.toLowerCase()}`">{{ group }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header,
  },
  async asyncData({ $axios }) {
    try {
      // Fetch the body part list from the backend
      const bodyParts = await $axios.$get('/api/exercises/bodyPartList');
      return { bodyParts };
    } catch (error) {
      console.error('Error fetching body part list:', error);
      return { bodyParts: [] };
    }
  },
};
</script>


<style scoped>
.hero {
  text-align: center;
}

.muscle-groups {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.muscle-card {
  margin: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
}
</style>
