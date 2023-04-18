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
              <tr 
                v-for="(ingredient, idx) in ingredients" 
                :key="`ingredient-${idx}`">               
                <td>
                  <input 
                  :value="ingredient.name"  
                  @input="$emits('update:modelValue', $event.target.value)"
                  type="text" 
                  class="w-full my-1">
                </td>
                <td>
                  <input 
                  :value="ingredient.quantity"  
                  @input="$emits('update:modelValue', $event.target.value)"
                  type="text" 
                  class="w-full my-1">
                </td>
              </tr>
              <tr class='w-full flex items-center justify-start px-2'>
                <button class="ml-auto bg-white rounded mt-2 px-4 py-1 text-lg" onClick="addIngredient">+</button>
                <button class="ml-auto bg-white rounded mt-2 px-4 py-1 text-lg" onClick="deleteIngredient">-</button>
              </tr>
            </tbody>
          </table>
        </div>
</template>

<script setup>
import { onMounted } from 'vue';

  const props = defineProps({
    modelValue: Object, // ingredients[name: string, quantity: int|string]
    emits: 'update:modelValue',
  })

  onMounted(() => {
    console.log(props.modelValue);
    for(let i = 0; i < 5; i++){
      props.modelValue += {name: '', quantity: ''}
    }
  })

</script>
