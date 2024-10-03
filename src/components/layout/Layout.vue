<template>
  <main class="min-h-screen w-full flex flex-col justify-between">
    <GlobalHeader />
    <slot />
    <GlobalFooter />
  </main>
</template>

<script setup>
import GlobalFooter from './GlobalFooter.vue';
import GlobalHeader from './GlobalHeader.vue';


</script>

<style lang="scss" scoped>

</style>