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
        <div class="form-control items-start relative">
          <label for="ingredients" class="w-1/5">ingredients</label>
          <table class="w-4/5 ml-4 h-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody class="border border-red-500 relative">
              <tr>               
                <td><input type="text" class="w-full my-1"></td>
                <td><input type="text" class="w-full my-1"></td>
              </tr>
              <tr>               
                <td><input type="text" class="w-full my-1"></td>
                <td><input type="text" class="w-full my-1"></td>
              </tr>
              <tr>               
                <td><input type="text" class="w-full my-1"></td>
                <td><input type="text" class="w-full my-1"></td>
              </tr>
              <tr>               
                <td><input type="text" class="w-full my-1"></td>
                <td><input type="text" class="w-full my-1"></td>
              </tr>
              <tr>               
                <td><input type="text" class="w-full my-1"></td>
                <td><input type="text" class="w-full my-1"></td>
              </tr>
              <tr>
                <button class="ml-auto bg-white rounded mt-2 px-4 py-1 text-lg" onClick="addIngredient">+</button>
              </tr>
            </tbody>
          </table>
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
    glass: event.target.elements.glass.value,
    ingredients: event.target.elements.ingredients.value,
  }
 
  await createDrink(newDrink)
}

function addIngredient(){
  console.log('add another ingredient')
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