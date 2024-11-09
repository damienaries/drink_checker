<template>
  <div class="flex gap-2 pt-4 pb-6">
    <!-- Filter and search bar -->
    <cocktail-list></cocktail-list>
    <variations :families="families"></variations>
  </div>
</template>

<script setup>
import CocktailList from "../components/CocktailList.vue";
import Variations from "../components/Variations.vue";

const families = [
  "sour",
  "collins",
  "gimlet",
  "rickey",
  "daiquiri",
  "sidecar",
  "caipirinha",
  "smash",
  "martini",
  "manhattan",
  "old fashioned",
];
</script>
