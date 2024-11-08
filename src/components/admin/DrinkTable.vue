<template>
  <section v-if="drinks" class="container-margin drink-table-container">
    <div class="mb-2 shadow-sm" v-for="drink in drinks" :key="drink.id">
      <div class="flex justify-between items-center bg-gray-100 border-b border-gray-200 p-4">
        <span @click="toggleCollapse(drink.id)" :class="{ 'rotate-90': expanded === drink.id }"
          >></span
        >
        <h5>{{ drink.name }}</h5>
        <div class="flex space-x-4">
          <button-component @click.prevent="drinkToEdit = drink">
            <svg-icon icon="edit" color="#111" size="18"></svg-icon>
          </button-component>
          <button-component @click.prevent="deleteDrink(drink.id)" color="danger">
            <svg-icon icon="delete" color="#fff" size="18"></svg-icon>
          </button-component>
        </div>
      </div>

      <table v-if="expanded === drink.id" class="w-full rounded p-4">
        <tr class="bg-gray-200">
          <th>Ingredients</th>
          <th>Method</th>
          <th>Glass</th>
          <th>Garnish</th>
          <th>Ice</th>
        </tr>
        <tr>
          <td class="table-cell">
            <tr
              v-for="ing in drink.ingredients"
              :key="ing.name"
              class="w-full flex items-center justify-between"
            >
              <td class="flex-1">{{ ing.name }}</td>
              <td class="w-1/3">{{ ing.quantity }} <span v-if="!isNaN(ing.quantity)">Oz</span></td>
            </tr>
          </td>
          <td class="table-cell">{{ drink.method }}</td>
          <td class="table-cell">{{ drink.glass }}</td>
          <td class="table-cell">{{ drink.garnish }}</td>
          <td class="table-cell">{{ drink.ice }}</td>
        </tr>
      </table>
    </div>
  </section>

  <edit-drink-modal v-if="drinkToEdit" :drink="drinkToEdit" @modal-close="drinkToEdit = null">
  </edit-drink-modal>
</template>

<script setup>
import { onMounted, ref } from "vue";
import drinkFunctions from "../../firebase/drinkFunctions.js";
const { getAllDrinks, updateDrink, deleteDrink, getDrink } = drinkFunctions;

import ButtonComponent from "../atoms/ButtonComponent.vue";
import SvgIcon from "../atoms/SvgIcon.vue";
import EditDrinkModal from "./EditDrinkModal.vue";

const drinks = ref(null);
const drinkToEdit = ref(null);

onMounted(() => {
  // todo onsnapshot for realtime updates
  getAllDrinks().then((res) => {
    drinks.value = res;
  });
});

const expanded = ref(null);

const toggleCollapse = (id) => {
  expanded.value = expanded.value ? null : id;
};
</script>

<style scoped>
.table-cell {
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  background: #fff;
  text-align: left;
}

/* todo make global container, add to page level and create grid or base layout */
.container-margin {
  margin: 0 100px;
}

@media screen and (max-width: 800px) {
  .container-margin {
    margin: 0 50px;
  }
}
</style>
