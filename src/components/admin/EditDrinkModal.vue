<template>
  <modal ref="editDrink" @modal-close="$emit('modal-close')" :show-close-button="false">
    <drink-form form-type="edit" :drink="drink"></drink-form>
  </modal>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Modal from "../atoms/Modal.vue";
import DrinkForm from "./DrinkForm.vue";

const props = defineProps({
  drink: Object,
});

const editDrink = ref(null);

onMounted(() => {
  editDrink.value?.openModal();
});
</script>
