<template>
  <modal :is-open="drink !== null" v-if="drink">
    <form class="border border-black p-12">
      <h2>Edit Mode for {{ drink.name }}</h2>
      <table class="w-full lg:w-11/12 my-8 mx-auto bg-gray-100 shadow-lg rounded p-4">
        <tr>
          <th>Name</th>
          <th>Ingredients</th>
          <th>Method</th>
          <th>Glass</th>
          <th>Garnish</th>
          <th>Ice</th>
        </tr>
        <tr>
          <td class="table-cell"><input type="text" :value="drink.name"></td>
          <td class="table-cell" >
            <tr v-for="ing in drink.ingredients" 
              :key="ing.name"
              class="w-full flex items-center justify-between">
              <td class="flex-1">{{ ing.name }}</td>
              <td class="w-1/3">{{ ing.quantity }} <span>Oz</span></td>
            </tr>
          </td>
          <td class="table-cell">{{ drink.method }}</td>
          <td class="table-cell">{{ drink.glass }}</td>
          <td class="table-cell">{{ drink.garnish }}</td>
          <td class="table-cell">{{ drink.ice }}</td>
          <td class="table-cell">
          <button class="w-full p-2 m-2 bg-blue-500 text-sm hover:bg-blue-600 text-white">
            Edit
          </button>
        </td>
        </tr>
      </table>
    </form>
  </modal>

</template>

<script setup>
import Modal from '../atoms/Modal.vue';

const props = {
  drink: Object,
}

</script>