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
  href: {
    type: String,
    default: null
  },
  color: {
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
  // set style for all buttons
  // then update for each style and depending on fill prop
  let classes = 'px-6 py-1 rounded text-center hover:shadow transition-all duration-300 max-h-8';

  if(props.color === 'primary') {
    classes += ' text-black bg-blue-100 hover:bg-blue-200';
  }
  if(props.color === 'secondary') {
    classes += ' text-white bg-blue-500 hover:bg-blue-600'
  }
  if(props.color === 'danger'){
    classes += ' text-white bg-red-300 hover:bg-red-400'
  }

  classes += props.fill ?  ' w-full' :  'w-fit';

  return classes;
})

const handleClick = (e) => {
  if(!props.href) {
    emit('click', e);
  }
}
</script>
