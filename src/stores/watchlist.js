import { defineStore } from 'pinia'

export const useWatchlistStore = defineStore('watchlist', {
  state: () => ({
    movies: []
  }),

  actions: {
    async fetchMovies() {
      if (this.movies.length > 0) return

      await new Promise(resolve => setTimeout(resolve, 800))
    },

    async addMovie(movie) {
      await new Promise(resolve => setTimeout(resolve, 500))

      this.movies.push({
        id: Date.now(),
        title: movie.title,
        watched: movie.watched
      })
    },

    async toggleWatched(id) {
      await new Promise(resolve => setTimeout(resolve, 300))

      const movie = this.movies.find(m => m.id === id)
      if (movie) {
        movie.watched = !movie.watched
      }
    },
    async deleteMovie(id) {
      await new Promise(resolve => setTimeout(resolve, 300))

      this.movies = this.movies.filter(movie => movie.id !== id)
    }
  },

  getters: {
    totalCount(state) {
      return state.movies.length
    }
  }
})
