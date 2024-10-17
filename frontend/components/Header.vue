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
header {
    background-color: #000000; 
    color: #FFFFFF;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Logo styling */
header .logo {
    font-size: 1.8rem;
    color: #00ff66;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    text-decoration: none;
}

/* Navigation styling */
header nav {
    display: flex;
    gap: 30px;
}

header nav a {
    color: #ffffff;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-decoration: none;
    transition: color 0.3s ease;
}

/* Hover effect for nav links */
header nav a:hover {
    color: #00ff66; /* Vibrant green on hover */
}

/* Button for call-to-action */
header .cta-button {
    background-color: #00ff66;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* Hover effect for the button */
header .cta-button:hover {
    background-color: #00cc52; 
}

  </style>
  