<template>
  <table v-if="drinks" class="w-full lg:w-11/12 my-8 mx-auto bg-gray-100 shadow-lg rounded p-4">
    <tr>
      <th>Name</th>
      <th>Ingredients</th>
      <th>Method</th>
      <th>Glass</th>
      <th>Garnish</th>
      <th>Ice</th>
    </tr>
    <tr v-for="drink in drinks" :key="drink._id">
      <td class="table-cell text-lg">{{ drink.name }}</td>
      <td class="table-cell" >
        <tr v-for="ing in drink.ingredients" 
          :key="ing.name"
          class="w-full flex items-center justify-between">
          <td class="flex-1">{{ ing.name }}</td>
          <td class="w-1/3">{{ ing.quantity }} <span>Oz</span></td>
        </tr>
      </td>
     <td class="table-cell">{{ drink.method }}</td>
     <td class="table-cell">{{ drink.glass }}</td>
     <td class="table-cell">{{ drink.garnish }}</td>
     <td class="table-cell">{{ drink.ice }}</td>
     <td class="table-cell">
      <button 
        class="p-2 m-2 bg-green-200 text-sm hover:text-green-800" 
        @click.prevent="editDrink(drink)">
        Edit
      </button>
      <button 
        class="p-2 bg-red-200 text-sm hover:text-red-800"
        @click.prevent="deleteDrink(drink.id)">
        Delete
      </button>
     </td>
    </tr>
  </table>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import drinkFunctions from '../firebase/drinkFunctions.js';
const { getAllDrinks, updateDrink, deleteDrink }  = drinkFunctions;

const drinks = ref(null) 

onMounted(() => {
  getAllDrinks().then(res => drinks.value = res);
})

async function editDrink(newDrink){
  console.log(newDrink);
  //open addrink form in modal with current values? edit in place if possible
// on save -> 
  await updateDrink(newDrink);
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