<template>
  <table class="w-11/12 my-8 mx-auto bg-gray-100 shadow-lg rounded p-4">
    <tr>
      <th>Name</th>
      <th>Ingredients</th>
      <th>Method</th>
      <th>Glass</th>
      <th>Garnish</th>
      <th>Ice</th>
    </tr>
    <tr v-f="drinks" v-for="drink in drinks" :key="drink._id">
     <td class="table-cell">{{ drink.name }}</td>
     <td  
      v-if="typeof drink.ingredients === 'object'" 
      class="table-cell" 
      v-for="ing in drink.ingredients" 
      :key="ing.name">
      <tr>
        <td>Name: {{ ing.name }}</td>
        <td>Quantity: {{ ing.quantity }} <span>Oz</span></td>
      </tr>
    </td>
      <td v-else>{{ drink.ingredients }}</td>
     <td class="table-cell">{{ drink.method }}</td>
     <td class="table-cell">{{ drink.glass }}</td>
     <td class="table-cell">{{ drink.garnish }}</td>
     <td class="table-cell">{{ drink.ice }}</td>
    </tr>
  </table>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import drinkFunctions from '../firebase/drinkFunctions.js';
const { getAllDrinks }  = drinkFunctions;

const drinks = ref(null) 

onMounted(() => {
  getAllDrinks().then(res => drinks.value = res);
})
</script>

<style scoped>
.table-cell {
  border: 1px solid #ddd;
  padding: .25rem .1rem;
  }
</style>