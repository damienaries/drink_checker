<script setup>
import cocktails from '../assets/data/cocktails.js';
import DrinkModal from './DrinkModal.vue';
import {onMounted, ref} from 'vue';

let showModal = ref(false);
let cocktailOpened = ref(null);

function open(drink){
  showModal.value = true;
  cocktailOpened.value = drink;
}

</script>

<template>
    <div class="section w-full md:w-4/5 md:mr-4 my-4 p-4 flex relative">
        <div class="flex items-start justify-start flex-wrap ">
          <figure class="relative z-5 w-full h-80 md:h-52 md:w-52 p-2 m-2 rounded hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer" 
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
    </div>
   <DrinkModal 
      v-if="showModal" 
      @close-modal="showModal = false" 
      :drink="cocktailOpened">
    </DrinkModal>
</template>

