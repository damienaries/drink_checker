<template>
  <section class="min-h-screen w-full">
      <add-drink-form></add-drink-form>

      <section class="container text-center my-12 mx-auto">
        <h3 class="text-xl">All drinks</h3>
        <drink-table></drink-table>
      </section>
  </section>
</template>

<script setup>  
import AddDrinkForm from '../components/admin/AddDrinkForm.vue';
import DrinkTable from '../components/admin/DrinkTable.vue';

</script>

<style lang="scss" scoped>

</style>