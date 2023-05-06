<template>
  <form @submit.prevent="addDrink" class="p-4 mx-auto w-full lg:w-2/3 shadow-lg rounded m-12 bg-gray-100">
        <h4 class="text-lg">Add cocktail to db</h4>
        <div class="form-control">
          <label for="name" class="w-1/5">Name</label>
          <input type="text" id="name" v-model="newDrink.name" class="flex-1 ml-4">
        </div>
        <div class="form-control">
          <label for="glass" class="w-1/5">Glass</label>
          <input type="text" id="glass" v-model="newDrink.glass" class="flex-1 ml-4">
        </div>
        <div class="form-control">
          <label for="method" class="w-1/5">method</label>
          <select id="method" v-model="newDrink.method" class="flex-1 ml-4">
            <option>Shake</option>
            <option>Stir</option>
            <option>Build</option>
            <option>Dry Shake</option>
          </select>
        </div>
        <div class="form-control">
          <label for="ice" class="w-1/5">ice</label>
          <select id="ice" v-model="newDrink.ice" class="flex-1 ml-4">
            <option>cube</option>
            <option>crushed</option>
            <option>up</option>
          </select>
        </div>
        <div class="form-control">
          <label for="garnish" class="w-1/5">garnish</label>
          <input type="text" id="garnish" v-model="newDrink.garnish" class="flex-1 ml-4">
        </div>
        <div class="form-control">
        <label for="ingredients" class="w-1/5">ingredients</label>
          <table class="w-4/5 ml-4 h-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody class="shadow">
              <tr v-for="(ingredient, idx) in newDrink.ingredients" 
                  :key="idx">               
                <td>
                  <input class="py-2 p-4 m-1" type="text" v-model="ingredient.name" placeholder="add ingredient">
                </td>
                <td>
                  <input class="py-2 px-4 m-1" type="text" v-model="ingredient.quantity" placeholder="add quantity">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button class="bg-white px-4 py-1 mt-4 hover:bg-blue-100 shadow hover:shadow:lg rounded-lg w-full">Add Drink</button>
      </form>
</template>

<script setup>
import { ref } from 'vue';
import drinkFunctions from '../firebase/drinkFunctions.js';
const {createDrink}  = drinkFunctions;

  const newDrink = ref({
    name: '',
    garnish: '',
    ice: '',
    method: null,
    glass: '',
    ingredients: [
      {name: '', quantity: ''},
      {name: '', quantity: ''},
      {name: '', quantity: ''},
      {name: '', quantity: ''},
      {name: '', quantity: ''}
    ],
  }
)

async function addDrink() {
  // only send ingredients needed
  newDrink.value.ingredients = newDrink.value.ingredients.filter(i => i.name !== '' || i.quantity !== '')
 
  // save to db
  await createDrink(newDrink.value).then(() => {
    clearForm();
  })
}

const clearForm = () => {
  newDrink.value = {
    name: '',
    garnish: '',
    ice: '',
    method: null,
    glass: '',
    ingredients: [
      {name: '', quantity: ''},
      {name: '', quantity: ''},
      {name: '', quantity: ''},
      {name: '', quantity: ''},
      {name: '', quantity: ''}
    ],
  }
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