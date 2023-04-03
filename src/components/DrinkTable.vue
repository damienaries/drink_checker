<template>
  <table class="w-11/12 my-8 mx-auto bg-gray-100 shadow-lg rounded p-4">
    <tr>
      <th>Name</th>
      <th>Ingredients</th>
      <th>Method</th>
      <th>Garnish</th>
      <th>Ice</th>
    </tr>
    <tr v-f="drinks" v-for="drink in drinks" :key="drink._id">
     <td class="table-cell">{{ drink.name }}</td>
     <td class="table-cell">{{ drink.ingredients }}</td>
     <td class="table-cell">{{ drink.method }}</td>
     <td class="table-cell">{{ drink.garnish }}</td>
     <td class="table-cell">{{ drink.ice }}</td>
    </tr>
  </table>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
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