<template>
  <div class="container">
    <div class="gp_query">
      <h3>Showing search results for:</h3>
      <h1>{{ query }}</h1>
    </div>

    <div class="gp_list__grid bg-dark">
      <div
        :key="indx + 'wrapper'"
        class="pb-2"
        v-for="(exerc, indx) in searchResults"
      >
        <em-card class="pb-2" :key="indx" wide info :card="exerc"></em-card>
        <hr :key="indx + 'separator'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  async asyncData({ $axios, query }) {
    if (query?.q) {
      let searchResults = [];

         try {
           let results = await $axios.get("https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + query.q, {
          headers: {
              'x-rapidapi-key': '3bc443408amshb8f92729e90ef71p19830bjsn63335cc01c32',
              'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }});
           searchResults = results.data;
           console.log(searchResults)
         } catch (err) {
           console.log(err);
         }
      return { searchResults, ...{ query: query.q } };
    }
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
}
.gp_list__grid {
  display: grid;
  padding: 1rem 2rem;
}
.gp_query {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}
</style>
