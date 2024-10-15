<template>
    <header>
      <nav class="navbar">
        <div class="logo">
          <nuxt-link to="/">Exo Master</nuxt-link>
        </div>
        <div class="auth-buttons">
          <div v-if="!user">
            <nuxt-link to="/login">Login</nuxt-link>
            <nuxt-link to="/signup">Sign Up</nuxt-link>
          </div>
          <div v-else>
            <nuxt-link to="/account">Account</nuxt-link>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
      }
    },
    mounted() {
      this.user = localStorage.getItem("user") || null;
    }
  }
  </script>
  
  <style>
  </style>
  