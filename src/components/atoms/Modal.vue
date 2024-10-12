<template>
  <div class="overlay fixed z-100 inset-0 h-screen w-screen bg-gray-900/50 flex items-center justify-center transition-all duration-300" @click.self="closeModal">
    <div class="modal-content">
      <header class="hidden">
        <button @click="closeModal">&times;</button>
      </header>
        <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = {
  isOpen: {
    type: Boolean,
    default: false,
  }
}

const show = ref(false);

const closeModal = () => {
  show.value = false;
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 500px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
