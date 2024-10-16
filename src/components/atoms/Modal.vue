<template>
  <div v-if="show" class="overlay fixed z-100 inset-0 h-screen w-screen bg-gray-900/75 flex items-center justify-center transition-all duration-300" @click.stop="closeModal">
    <div class="modal-content w-full md:w-3/4 max-w-[800px] m-4 h-screen md:h-fit md:max-h-[800px] py-4 px-4 md:px-6 bg-white rounded relative overflow-y-scroll">
      <header class="p-4 bg-white flex justify-end">
        <button @click="closeModal">&times;</button>
      </header>
      <slot />

      <footer class="w-full mt-4">
        <button-component :fill="true" @click="closeModal">
          Close
        </button-component>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { defineExpose, ref } from 'vue';

import ButtonComponent from './ButtonComponent.vue';
const show = ref(false);

const emit = defineEmits(['modal-close'])

function openModal() {
  show.value = true;
}

function closeModal() {
  emit('modal-close')
  show.value = false;
}

defineExpose({
  openModal, closeModal
})
</script>
