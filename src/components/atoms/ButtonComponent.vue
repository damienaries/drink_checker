<template>
  <component
   :is="href? 'a' : 'button'"
   :href="href"
   :class="buttonClass"
   @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: String|null,
  style: {
    type: String,
    default: 'primary'
  },
  fill: { // width
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['click']);

const buttonClass = computed(() => {
  switch(props.style){
    case 'primary':
      return 'text-black text-center top-0 right-0 px-6 py-1 rounded m-2 bg-blue-100 hover:bg-blue-200';
      break;
    case 'secondary':
      return 'w-full p-2 m-2 bg-blue-500 text-sm hover:bg-blue-600 text-white';
      break;
    default:
      return 'text-red-500 text-center top-0 right-0 px-6 py-1 rounded bg-blue-100 hover:bg-blue-200'
  }
})

const handleClick = (e) => {
  if(!props.href) {
    emit('click', e);
  }
}
</script>
