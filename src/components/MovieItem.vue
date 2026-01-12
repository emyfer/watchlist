<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'delete'])
</script>

<template>
  <li>
    <span class="movie-name">
        <input
            class="checkbox"
            type="checkbox"
            :checked="movie.watched"
            @change="emit('toggle', movie.id)"
            />

            <span :class="{ watched: movie.watched }">
            {{ movie.title }}
            </span>
    </span>
    

    <button class="delete" @click="emit('delete', movie.id)">
      Delete
    </button>

  </li>

</template>

<style scoped>
  li {
    list-style: none;
    background: #ffffff;
    border-radius: 16px;
    padding: 20px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    transition: transform 0.2s ease;
  }

  li:hover {
    transform: translateY(-2px);
  }

  .movie-name {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1rem;
  }

  .watched {
    text-decoration: line-through;
    opacity: 0.5;
  }

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #93c5fd;
    cursor: pointer;
    position: relative;
  }

  input[type="checkbox"]:checked {
    background-color: #93c5fd;
  }

  .delete {
    background: transparent;
    border: none;
    color: #ef4444;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .delete:hover {
    text-decoration: underline;
  }
</style>

