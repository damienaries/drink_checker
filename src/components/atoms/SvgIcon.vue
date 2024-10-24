<template>
  <svg
    v-if="svgContent"
    :class="svgClass"
    :style="{ color }"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    v-html="svgContent"
  />
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

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

const svgContent = ref(null);
const viewBox = ref('0 0 24 24');

const svgClass = `icon icon-${props.icon}`;

const loadSvg = async () => {
  try {
    const response = await fetch(`/icons/${props.icon}.svg`);
    if (!response.ok) {
      throw new Error('SVG not found');
    }
    const svgText = await response.text();
    svgContent.value = svgText;
  } catch (error) {
    console.error(`Error loading icon: ${props.icon}`, error);
    svgContent.value = null; // Handle error state, could also use fallback content
  }
};

onMounted(loadSvg);
watch(() => props.icon, loadSvg);
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
}
</style>
