<template>
  <modal ref="drinkModal" @modal-close="$emit('modal-close')">
    <div class="flex flex-col md:flex-row gap-2">
      <div
        class="img-placeholder w-full md:w-1/2 mr-4 overflow-hidden h-72 md:max-h-full shadow-lg rounded"
      >
        <img :src="drink.imageUrl" />
      </div>
      <div class="w-full md:w-1/2 py-4 md:px-4 border">
        <h3 class="text-xl uppercase mb-2">{{ drink.name }}</h3>
        <p class="capitalize">{{ build }}</p>
        <p class="capitalize">{{ garnishes }}</p>
        <ul class="pt-8 pb-4 relative">
          <div
            class="absolute top-0 text-xs right-0 px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
            @click.prevent="isMetric = !isMetric"
          >
            oz / cl
          </div>
          <li
            v-for="(ingredient, idx) in drink.ingredients"
            :key="idx"
            class="flex items-center justify-between p-1"
          >
            <span>{{ ingredient.name }}</span>
            <span>
              {{ isMetric === true ? ingredient.quantity * 3 : ingredient.quantity }} {{ unit }}
            </span>
          </li>
        </ul>

        <small v-if="drink.description">{{ drink.description }}</small>
      </div>
    </div>
  </modal>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Modal from "./atoms/Modal.vue";

const props = defineProps({
  drink: Object,
});

const drinkModal = ref(null);
const isMetric = ref(false);

onMounted(() => {
  drinkModal.value?.openModal();
});

const build = computed(() => {
  if (typeof props.drink.method === "string") {
    return props.drink.method;
  } else {
    return props.drink.method.join(", ");
  }
});

const garnishes = computed(() => {
  if (!props.drink.garnish) return "No garnish";
  if (typeof props.drink.garnish === "string") return props.drink.garnish;
  else return props.drink.garnish.join(", ");
});

const unit = computed(() => {
  return isMetric.value === true ? "cl" : "oz";
});
</script>
