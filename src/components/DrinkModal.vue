<template>
  <div class='overlay fixed z-100 inset-0 h-screen w-screen bg-gray-900 flex items-center justify-center transition-all duration-300'>
      <div class="modal-content w-full m-4 h-fit md:w-3/4 md:h-3/4 py-4 px-4 md:px-6 bg-white rounded flex flex-col md:flex-row relative overflow-y-scroll">
      <div class="img-placeholder w-full md:w-1/2 mr-4 overflow-hidden max-h-72 md:max-h-full shadow-lg rounded">
        <img :src="drink.imageUrl" />
      </div>
      <div class="w-full md:w-1/2 py-4 md:px-4">
        <h3 class="text-xl uppercase mb-2">{{drink.name}}</h3>
        <p class="capitalize">{{build}}</p>
        <p class="capitalize">{{ garnishes }}</p>
        <div class="mt-4">
          <ul class="pt-8 pb-4 relative">
            <div class="absolute top-0 text-xs right-0 px-2 py-1 rounded-full bg-gray-100" @click.prevent="isMetric = !isMetric">oz / cl</div>
            <li v-for="(ingredient, idx) in drink.ingredients" :key="idx" class="flex items-center justify-between p-1">
              <span>{{ ingredient.name }}</span>
              <span>
                {{ isMetric === true ? ingredient.quantity*3 : ingredient.quantity }} {{ unit }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <button 
        class="md:absolute text-black text-center top-0 right-0 px-6 py-1 rounded m-2 bg-blue-100 hover:bg-blue-200 text-black" 
        @click="$emit('closeModal')">Close</button>
      </div>
  </div>
</template>

<script setup>
import {onMounted, computed, ref} from 'vue';
const props = defineProps({
  drink: Object,
})

const isMetric = ref(false);
 
const build = computed(() => {
if (typeof props.drink.method === 'string'){
  return props.drink.method
} else {
  return props.drink.method.join(', ')
}
})

const garnishes = computed(() => {
  if (!props.drink.garnish) return 'No garnish';
  if (typeof props.drink.garnish === 'string') return props.drink.garnish;
  else return props.drink.garnish.join(', ');
})

const unit = computed(() => {
// todo display pretty value
  return isMetric.value === true ? 'cl' : 'oz'
})

</script>
