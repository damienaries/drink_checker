<template>
  <div style="max-width: 1500px" class="flex gap-2">
    <!-- Filter and search bar -->
    <cocktail-list></cocktail-list>
    <variations :families="families"></variations>
  </div>
</template>

<script setup>
import CocktailList from '../components/CocktailList.vue';
import Variations from '../components/Variations.vue';

const families = ['sour', 'collins', 'gimlet', 'rickey', 'daiquiri', 'sidecar', 'caipirinha', 'smash', 'martini', 'manhattan', 'old fashioned'];

</script>
