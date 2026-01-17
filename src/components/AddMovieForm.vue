<!-- Komponenta sa stanjem -->
<script setup>
    import { ref } from 'vue'

    //Emitiranje eventa 
    const emit = defineEmits(['add-movie'])

    const title = ref('')
    const watched = ref(false)

    function submitForm() {
        emit('add-movie', {
            title: title.value,
            watched: watched.value
        })

        title.value = ''
        watched.value = false
    }
</script>

<template>
  <form @submit.prevent="submitForm">

<!-- Two-way binding -->
    <input
      type="text"
      placeholder="Movie title"
      v-model="title"
      required
    />

    <label class="checkbox-label">
      <input type="checkbox" v-model="watched" />
      Watched
    </label>

    <button>Add movie</button>
  </form>
</template>

<style scoped>
  form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input[type="text"] {
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid #ddd;
    font-size: 1rem;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    padding: 12px;
    border-radius: 12px;
    border: none;
    background-color: #93c5fd;
    color: white;
    font-size: 1rem;
    cursor: pointer;
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

  button:hover {
    opacity: 0.9;
  }
  
</style>

