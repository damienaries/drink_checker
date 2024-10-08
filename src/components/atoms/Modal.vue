<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <header>
        <slot name="header">
          <h3>Default Header</h3>
        </slot>
        <button @click="closeModal">&times;</button>
      </header>
      <section>
        <slot>
          <p>Default content of the modal.</p>
        </slot>
      </section>
      <footer>
        <slot name="footer">
          <button @click="closeModal">Close</button>
        </slot>
      </footer>
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
