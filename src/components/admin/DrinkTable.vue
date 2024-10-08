<template>
  <table v-if="drinks" class="w-full lg:w-11/12 my-8 mx-auto bg-gray-100 shadow-lg rounded p-4">
    <tr>
      <th>Name</th>
      <th>Ingredients</th>
      <th>Method</th>
      <th>Glass</th>
      <th>Garnish</th>
      <th>Ice</th>
      <th></th>
    </tr>
    <tr v-for="drink in drinks" :key="drink.id">
      <td class="table-cell">{{ drink.name }}</td>
      <td class="table-cell" >
        <tr v-for="ing in drink.ingredients" 
          :key="ing.name"
          class="w-full flex items-center justify-between border-b border-gray-200">
          <td class="flex-1">{{ ing.name }}</td>
          <td class="w-1/3">{{ ing.quantity }} <span>Oz</span></td>
        </tr>
      </td>
     <td class="table-cell">{{ drink.method }}</td>
     <td class="table-cell">{{ drink.glass }}</td>
     <td class="table-cell">{{ drink.garnish }}</td>
     <td class="table-cell">{{ drink.ice }}</td>
     <td class="table-cell space-x-4">
      <button-component @click.prevent="editDrink(drink)">Edit</button-component>
      <button-component @click.prevent="deleteDrink(drink.id)" color="danger">Delete</button-component>
     </td>
    </tr>
  </table>

  <edit-drink-modal v-if="drinkToEdit !== null" :drink="drinkToEdit"></edit-drink-modal>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import drinkFunctions from '../../firebase/drinkFunctions.js';
const { getAllDrinks, updateDrink, deleteDrink, getDrink }  = drinkFunctions;

import ButtonComponent from '../atoms/ButtonComponent.vue';
import EditDrinkModal from './EditDrinkModal.vue';

const drinks = ref(null);
const drinkToEdit = ref(null)

onMounted(() => {
  // todo onsnapshot for realtime updates
  getAllDrinks().then(res => {
    drinks.value = res
  });
})

const editDrink = (drink) => {
  drinkToEdit.value = drink;
}

</script>

<style scoped>
.table-cell {
  border: 1px solid #ddd;
  padding: .5rem 1rem;
  background: #fff;
  text-align: left;
  }
</style>