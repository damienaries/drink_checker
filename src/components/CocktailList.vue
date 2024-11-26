<template>
  <section class="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-fit">
    <!-- todo make card component, use here and for families aside -->
    <figure
      class="relative z-5 w-full h-80 md:h-52 p-2 m-2 rounded hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer"
      v-for="cocktail in cocktails"
      :key="cocktail.name"
      @click.prevent="showDrinkDetails(cocktail)"
    >
      <div
        class="absolute h-full w-full top-0 left-0 hover:scale-110 active:scale-110 transition duration-500 flex items-center justify-center bg-cover"
        :style="{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${cocktail.imageUrl})`,
        }"
      >
        <div class="absolute text-xl text-white capitalize">{{ cocktail.name }}</div>
      </div>
    </figure>
  </section>

  <DrinkModal :drink="cocktailOpened" v-if="cocktailOpened" @modal-close="cocktailOpened = null">
  </DrinkModal>
</template>

<script setup>
import { onMounted, ref } from "vue";
import drinkFunctions from "../../server/firebase/drinkFunctions";
import DrinkModal from "./DrinkModal.vue";
const { getAllDrinks } = drinkFunctions;

const cocktailOpened = ref(null);
const cocktails = ref(null);

function showDrinkDetails(drink) {
  cocktailOpened.value = drink;
}

onMounted(() => {
  // todo onsnapshot for realtime updates
  getAllDrinks().then((res) => {
    cocktails.value = res;
  });
});
</script>
