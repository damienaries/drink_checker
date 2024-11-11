<template>
  <section class="min-h-screen w-full pt-12">
    <add-drink-form></add-drink-form>

    <section class="text-center my-12">
      <h3 class="text-xl">All drinks</h3>
      <drink-table></drink-table>
    </section>
  </section>
</template>

<script setup>
import AddDrinkForm from "../components/admin/AddDrinkForm.vue";
import DrinkTable from "../components/admin/DrinkTable.vue";
</script>
