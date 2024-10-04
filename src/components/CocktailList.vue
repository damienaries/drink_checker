<script setup>
import { ref } from 'vue';
import cocktails from '../assets/data/cocktails.js';
import drinkFunctions from '../firebase/drinkFunctions.js';
import DrinkModal from './DrinkModal.vue';
const { getAllDrinks }  = drinkFunctions;

const showModal = ref(false);
const cocktailOpened = ref(null);

function open(drink){
  showModal.value = true;
  cocktailOpened.value = drink;
}

// onMounted(() => {
//   let dbCocktails = getAllDrinks();
//   console.log(dbCocktails)
// })


</script>

<template>
  <div class="section w-full md:w-4/5 md:mr-4 my-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-fit">
    <figure class="relative z-5 w-full h-80 md:h-52 p-2 m-2 rounded hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer" 
      v-for='cocktail in cocktails' 
      :key='cocktail.name'
      @click.prevent="open(cocktail)"
      >
      <div class="absolute h-full w-full top-0 left-0 hover:scale-110 active:scale-110 transition duration-500 flex items-center justify-center bg-cover" 
      :style="{backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${cocktail.imageUrl})`}">
        <div class="absolute text-xl text-white capitalize">{{cocktail.name}}</div>
      </div>
    </figure>
  </div>
  <DrinkModal 
    v-if="showModal" 
    @close-modal="showModal = false" 
    :drink="cocktailOpened">
  </DrinkModal>
</template>
