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
    <tr v-for="drink in drinks" :key="drink.id">
      <td class="table-cell">{{ drink.name }}</td>
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
        @click.prevent="editDrink(drink.id)">
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

  <!-- todo make Modal -->
  <form v-if="editMode" @sumbit.prevent="editDrink(editMode)" class="border border-black p-12">
    <h2>Edit Mode for {{ editMode.name }}</h2>
    <table class="w-full lg:w-11/12 my-8 mx-auto bg-gray-100 shadow-lg rounded p-4">
    <tr>
      <th>Name</th>
      <th>Ingredients</th>
      <th>Method</th>
      <th>Glass</th>
      <th>Garnish</th>
      <th>Ice</th>
    </tr>
    <tr>
      <td class="table-cell"><input type="text" :value="editMode.name"></td>
      <td class="table-cell" >
        <tr v-for="ing in editMode.ingredients" 
          :key="ing.name"
          class="w-full flex items-center justify-between">
          <td class="flex-1">{{ ing.name }}</td>
          <td class="w-1/3">{{ ing.quantity }} <span>Oz</span></td>
        </tr>
      </td>
     <td class="table-cell">{{ editMode.method }}</td>
     <td class="table-cell">{{ editMode.glass }}</td>
     <td class="table-cell">{{ editMode.garnish }}</td>
     <td class="table-cell">{{ editMode.ice }}</td>
     <td class="table-cell">
      <button 
        class="w-full p-2 m-2 bg-blue-500 text-sm hover:bg-blue-600 text-white">
        Edit
      </button>
     </td>
    </tr>
  </table>
  </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import drinkFunctions from '../firebase/drinkFunctions.js';
const { getAllDrinks, updateDrink, deleteDrink, getDrink }  = drinkFunctions;

const drinks = ref(null);
const editMode = ref(null);

onMounted(() => {
  // todo onsnapshot for realtime updates
  getAllDrinks().then(res => {
    drinks.value = res
  });
})

const editDrink = async(id) => {
  await getDrink(id).then((drink) => {
    editMode.value = drink;
  });
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