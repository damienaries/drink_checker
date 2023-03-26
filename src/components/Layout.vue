<template>
  <main class="min-h-screen w-full flex flex-col justify-between">
    <GlobalHeader />
    <slot />
    <GlobalFooter />
  </main>
</template>

<script setup>
import GlobalHeader from './GlobalHeader.vue';
import GlobalFooter from './GlobalFooter.vue';


</script>

<style lang="scss" scoped>

</style>