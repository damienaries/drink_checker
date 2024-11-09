<template>
  <aside class="hidden md:flex w-1/5 flex-col gap-4 md:ml-4">
    <article
      v-for="(family, idx) in props.families"
      :key="idx"
      class="w-full h-80 md:h-52 p-2 m-2 rounded bg-blue-300 text-white shadow hover:-translate-x-1 transition-all duration-200 cursor-pointer"
    >
      <div class="w-full text-left p-2 capitalize">{{ family }}</div>
    </article>
  </aside>
</template>

<script setup>
/***
 * TODO
 * pick poster img for each family
 * link to families/variants page
 */

const props = defineProps({
  families: Array,
});
</script>

<style lang="scss" scoped></style>
