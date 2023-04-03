<template>
  <form @submit.prevent="addDrink" class="p-4 mx-auto w-full md:w-2/3 shadow-lg rounded m-8 bg-gray-100">
        <h4 class="text-lg">Add cocktail to db</h4>
        <div class="form-control w-full flex items-center justify-between my-4">
          <label for="name" class="w-1/5">Name</label>
          <input type="text" id="name" v-model="name" class="flex-1 ml-4">
        </div>
        <div class="form-control w-full flex items-center justify-between my-4">
          <label for="garnish" class="w-1/5">garnish</label>
          <input type="text" id="garnish" v-model="garnish" class="flex-1 ml-4">
        </div>
        <div class="form-control w-full flex items-center justify-between my-4">
          <label for="method" class="w-1/5">method</label>
          <input type="text" id="method" v-model="method" class="flex-1 ml-4">
        </div>
        <div class="form-control w-full flex items-center justify-between my-4">
          <label for="ice" class="w-1/5">ice</label>
          <input type="text" id="ice" v-model="ice" class="flex-1 ml-4">
        </div>
        <div class="form-control w-full flex items-center justify-between my-4">
          <label for="ingredients" class="w-1/5">ingredients</label>
          <input type="text" id="ingredients" placeholder="name:qty; name:qty;" v-model="ingredients" class="flex-1 ml-4"> <!--todo parse ingredients method -->
        </div>
        <button class="bg-white px-4 py-1 mt-4 hover:bg-blue-100 shadow hover:shadow:lg rounded-lg w-full">Add Drink</button>
      </form>
</template>

<script setup>
import drinkFunctions from '../firebase/drinkFunctions.js';
const {createDrink}  = drinkFunctions;

async function addDrink(event) {
  const newDrink = {
    name: event.target.elements.name.value,
    garnish: event.target.elements.garnish.value,
    ice: event.target.elements.ice.value,
    method: event.target.elements.method.value,
    ingredients: event.target.elements.ingredients.value,
  }
 
  await createDrink(newDrink)
}

</script>
