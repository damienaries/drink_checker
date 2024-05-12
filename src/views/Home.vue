<template>
  <div style="max-width: 1500px" class="h-full flex">
    <cocktail-list></cocktail-list>
    <variations :families="families"></variations>
  </div>
</template>

<script setup>
import CocktailList from '../components/CocktailList.vue';
import Variations from '../components/Variations.vue'; // pass families array to loop over

const families = ['sour', 'smash', 'manhattan']; // todo add famility to each cocktail

</script>
