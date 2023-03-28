<template>
  <aside class="hidden md:block w-1/5 flex flex-col my-4 py-4 mr-8">
      <article v-for="(family, idx) in props.families" :key="idx" class="w-full h-52 p-4 m-4 rounded bg-blue-300 text-white shadow hover:-translate-x-1 transition-all duration-200 cursor-pointer">
        <div class="w-full text-left p-2 capitalize">{{ family }}</div>
      </article>
    </aside>
</template>

<script setup>
import { onMounted } from 'vue';
/***
 * TODO
 * pick poster img for each family
 * link to families/variants page
 */

const props = defineProps({
  families: Array
})

</script>

<style lang="scss" scoped>

</style>