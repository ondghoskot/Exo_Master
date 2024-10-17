<template>
  <div class="gp_header">
    <div class="gp_header__logo">
      <logo @click.native="$router.push('/')"></logo>
    </div>

    <div class="gp_header__actions">
      <em-search-input @change="search"></em-search-input>
      <!-- <gp-avatar></gp-avatar> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "EmHeader",
  methods: {
    search(query) {
      window.location.href = process.env.APP_URL+"/search?q=" + query;
    },
  },
};
</script>
<style lang="scss" scoped>
.gp_header {
  padding: 0.75rem;
  display: flex;
  min-height: 5rem;
  justify-content: space-between;
  border-bottom: 2px solid rgba(210, 10, 46, 0.5);
  &__logo {
    width: 4rem;
    margin: 0.5rem 0 0 1rem;
  }
  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
}
</style>
