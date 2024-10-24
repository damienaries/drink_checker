<template>
  <modal ref="editDrink" @modal-close="$emit('modal-close')">
    <form class="">
      <h2>Edit Mode for {{ drink.name }}</h2>
      <table class="w-full my-8 mx-auto bg-gray-100 shadow-lg rounded p-4">
        <tr>
          <th>Name</th>
          <th>Ingredients</th>
          <th>Method</th>
          <th>Glass</th>
          <th>Garnish</th>
          <th>Ice</th>
          <th>Family</th>
          <th>image Url</th>
        </tr>
        <tr>
          <td class="table-cell"><input type="text" :value="drink.name"></td>
          <td class="table-cell" >
            <tr v-for="ing in drink.ingredients" 
              :key="ing.name"
              class="w-full flex items-center justify-between">
              <td><input :value="ing.name"></td>
              <td class="flex"><input :value="ing.quantity"><span>Oz</span></td>
            </tr>
          </td>
          <td class="table-cell"><input :value="drink.method"></td>
          <td class="table-cell"><input :value="drink.glass"></td>
          <td class="table-cell"><input :value="drink.garnish"></td>
          <td class="table-cell"><input :value="drink.ice"></td>
          <td class="table-cell"><input :value="drink.family"></td>
        </tr>
      </table>
    </form>
  </modal>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import Modal from '../atoms/Modal.vue';

  const emptyForm = {
  name: null,
  garnish: null,
  ice: null,
  method: null,
  glass: null,
  imageUrl: null,
  family: null,
  ingredients: [
    {name: null, quantity: null, unit: null},
    {name: null, quantity: null, unit: null},
    {name: null, quantity: null, unit: null},
    {name: null, quantity: null, unit: null},
    {name: null, quantity: null, unit: null}
  ],  
}

const props = defineProps({
  drink: Object,
})

const editDrink = ref(null);

onMounted(() => {
  editDrink.value?.openModal();
})

</script>