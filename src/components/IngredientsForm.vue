<template>
  <div class="form-control items-start relative">
          <label for="ingredients" class="w-1/5">ingredients</label>
          <table class="w-4/5 ml-4 h-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody class="border border-red-500 relative">
              <tr v-for="(ingredient, idx) in ingredients" 
                  :key="`ingredient-${idx}`">               
                <td>
                  <input class="w-1/2 py-2 p-4 m-1" type="text" :value="ingredient.name" placeholder="add ingredient">
                </td>
                <td>
                  <input class="w-1/2 py-2 px-4 m-1" type="text" :value="ingredient.quantity" placeholder="add quantity">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
</template>

<script setup>
  const props = defineProps({
    ingredients: Array,
  })
  defineEmits(['update:ingredients'])

</script>
