<script setup>
  import AddMovieForm from '../components/AddMovieForm.vue'
  import { useWatchlistStore } from '../stores/watchlist'


  const watchlistStore = useWatchlistStore()

  function addMovie(movie) {
    watchlistStore.addMovie(movie)
  }


</script>

<template>
  <div class="container">
    <h1>Add a new movie</h1>
    <p class="subtitle">
      Add movies to your personal watchlist 
    </p>

    <div class="card">
      <AddMovieForm @add-movie="addMovie" />
    </div>
  </div>
</template>


<style scoped>
  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 5px 20px;
    text-align: center;
  }

  .subtitle {
    opacity: 0.7;
    margin-bottom: 30px;
  }

  .card {
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  }
</style>

