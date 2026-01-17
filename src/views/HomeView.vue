<script setup>
import { onMounted } from 'vue'
import { useWatchlistStore } from '@/stores/watchlist'
import MovieItem from '@/components/MovieItem.vue'

const watchlist = useWatchlistStore()

//Lifecycle hook
  onMounted(() => {
    watchlist.fetchMovies()
  })
</script>

<template>
  <div class="container">
    <h1>Added movies:</h1>

    <p v-if="watchlist.movies.length === 0" class="empty">
      No movies added yet
    </p>

    <ul>
      <MovieItem
        v-for="movie in watchlist.movies"
        :key="movie.id"
        :movie="movie"
        @toggle="watchlist.toggleWatched"
        @delete="watchlist.deleteMovie"
      />
    </ul>
  </div>
</template>

<!-- Scoped style -->
<style scoped>
  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .empty {
    text-align: center;
    opacity: 0.6;
  }

</style>