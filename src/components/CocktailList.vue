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
    <h1 class="capitalize text-gray-900 m-4 text-2xl">Classics</h1>
    <div class="section w-full my-4 p-4 flex relative">
        <div class="flex items-start justify-start flex-wrap w-full md:w-4/5 md:mr-4">
          <figure class="relative z-5 w-full h-80 md:h-48 md:w-48 p-2 m-2 rounded hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer" 
            v-for='cocktail in cocktails' 
            :key='cocktail.name'
            @click.prevent="open(cocktail)"
            >
            <div class="absolute h-full w-full top-0 left-0 hover:scale-110 transition duration-350 flex items-center justify-center hover:rounded-full">
              <div class="absolute text-xl text-white capitalize">{{cocktail.name}}</div>
              <img :src="cocktail.imageUrl" alt="drink image">
            </div>
          </figure>
        </div>
        <aside class="hidden md:block w-1/5 flex flex-col">
          <h1 class="text-gray-900">cocktail variations</h1>
          <article class="p-4 m-2 rounded bg-gray-500 text-white shadow">
            <div class="w-full text-left p-2 capitalize">sours</div>
          </article>
          <article class="p-4 m-2 rounded bg-gray-500 text-white shadow">
            <div class="w-full text-left p-2 capitalize">Old fashioned</div>
          </article>
          <article class="p-4 m-2 rounded bg-gray-500 text-white shadow">
            <div class="w-full text-left p-2 capitalize">fizzes</div>
          </article>
          <article class="p-4 m-2 rounded bg-gray-500 text-white shadow">
            <div class="w-full text-left p-2 capitalize">flips</div>
          </article>
          <article class="p-4 m-2 rounded bg-gray-500 text-white shadow">
            <div class="w-full text-left p-2 capitalize">tikis</div>
          </article>
        </aside>
    </div>
   <DrinkModal 
      v-if="showModal" 
      @close-modal="showModal = false" 
      :drink="cocktailOpened">
    </DrinkModal>
</template>

