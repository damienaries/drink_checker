<template>
  <svg 
    :class="color"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"   
    fill="currentColor"
    v-html="svgContent"
  />
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: 24,
  },
  color: {
    type: String,
    default: "currentColor",
  },
});

const viewBox = '0 0 24 24';

const svgContent = computed(() => svgIcons[props.icon] || '');

</script>
