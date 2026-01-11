<script setup>
  import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="all">
    <header>
      <div class="wrapper">
        <h1>MyMovies</h1>
        <nav>
          <RouterLink to="/" class="nav-link">
            Home
          </RouterLink>

          <RouterLink to="/addmovie" class="nav-link">
            Add movies
          </RouterLink>
        </nav>

      </div>

      <hr style="color: black; height: 1px;">

    </header>


    <RouterView />
  </div>
  
</template>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #f9fafb;
  margin: 0;
}

.header {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
}

.wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
}

nav {
  display: flex;
  gap: 15px;
}

.nav-link {
  padding: 8px 14px;
  border-radius: 10px;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #e0f2fe;
}

.router-link-exact-active {
  background-color: #93c5fd;
  color: white;
}
</style>
