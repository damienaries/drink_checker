<template>
  <section v-if="drinks" class="drink-table-container">
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
        <thead>
          <tr class="bg-gray-200">
            <th>Ingredients</th>
            <th>Method</th>
            <th>Glass</th>
            <th>Garnish</th>
            <th>Ice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <table class="w-full">
                <tr v-for="ing in drink.ingredients" :key="ing.name" class="odd:bg-gray-100/50">
                  <td class="w-2/3">{{ ing.name }}</td>
                  <td class="w-1/3">
                    {{ ing.quantity }} <span v-if="!isNaN(ing.quantity)">Oz</span>
                  </td>
                </tr>
              </table>
            </td>
            <td class="table-cell">{{ drink.method }}</td>
            <td class="table-cell">{{ drink.glass }}</td>
            <td class="table-cell">{{ drink.garnish }}</td>
            <td class="table-cell">{{ drink.ice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <edit-drink-modal v-if="drinkToEdit" :drink="drinkToEdit" @modal-close="drinkToEdit = null">
  </edit-drink-modal>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import drinkFunctions from "../../firebase/drinkFunctions.js";
const { getAllDrinks, deleteDrink } = drinkFunctions;

import ButtonComponent from "../atoms/ButtonComponent.vue";
import SvgIcon from "../atoms/SvgIcon.vue";
import EditDrinkModal from "./EditDrinkModal.vue";

const drinks = ref([]);
const drinkToEdit = ref(null);

onBeforeMount(() => {
  // todo get data earlier, cache, lazy load and infinite scroll
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
}
</style>
