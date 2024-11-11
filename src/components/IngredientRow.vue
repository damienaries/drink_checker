<template>
  <div class="border-b border-gray-100 bg-white flex">
    <input
      class="py-2 px-4 w-3/6"
      type="text"
      v-model="ingredient.name"
      placeholder="add ingredient"
    />
    <input
      id="quantity"
      v-model="ingredient.quantity"
      type="text"
      placeholder="Enter quantity"
      class="py-2 px-4 w-2/6 border-x border-gray-200"
    />
    <input
      disabled
      id="unit"
      v-if="ingredient.quantity && !isNaN(ingredient.quantity)"
      v-model="ingredient.unit"
      :placeholder="ingredient.unit"
      class="py-2 px-4 w-1/6"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  ingredient: Object,
});
</script>

<style scoped>
input,
select {
  border-radius: 8px;
  padding: 12px 20px;
  background: #fff;
}

input:focus {
  outline: 1px solid #adadad;
  transition: all 0.2s ease;
}
</style>
