<template>
  <form @submit.prevent="addDrink" class="p-4 mx-auto w-full lg:w-2/3 shadow-lg rounded m-12 bg-gray-100">
        <h4 class="text-lg">Add cocktail to db</h4>
        <div class="form-control">
          <label for="name" class="w-1/5">Name</label>
          <input type="text" id="name" v-model="name" class="flex-1 ml-4">
        </div>
        <div class="form-control">
          <label for="garnish" class="w-1/5">garnish</label>
          <input type="text" id="garnish" v-model="garnish" class="flex-1 ml-4">
        </div>
        <div class="form-control">
          <label for="method" class="w-1/5">method</label>
          <input type="text" id="method" v-model="method" class="flex-1 ml-4">
        </div>
        <div class="form-control">
          <label for="glass" class="w-1/5">Glass</label>
          <input type="text" id="glass" v-model="glass" class="flex-1 ml-4">
        </div>
        <div class="form-control">
          <label for="ice" class="w-1/5">ice</label>
          <input type="text" id="ice" v-model="ice" class="flex-1 ml-4">
        </div>
        <ingredients-form 
          :model-value="ingredients"
          @update:modelValue='newValue => ingredients = newValue'>
      </ingredients-form>
      
        <button class="bg-white px-4 py-1 mt-4 hover:bg-blue-100 shadow hover:shadow:lg rounded-lg w-full">Add Drink</button>
      </form>
</template>

<script setup>
import drinkFunctions from '../firebase/drinkFunctions.js';
import IngredientsForm from './IngredientsForm.vue';
const {createDrink}  = drinkFunctions;

async function addDrink() {
  newDrink = {
    name: this.name,
    garnish: this.garnish,
    ice: this.ice,
    method: this.method,
    glass: this.glass,
    ingredients: this.ingredients,
  }
 
  await createDrink(newDrink);
}

</script>


<style scoped>
.form-control {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
}

@media screen and (max-width: 800px){
  .form-control {
  flex-direction: column;
  align-items: flex-start;
  }
}

</style>