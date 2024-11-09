<template>
  <main class="min-h-screen w-full flex flex-col justify-between">
    <GlobalHeader />
    <div class="container-margin v2-h-full">
      <slot />
    </div>
    <GlobalFooter />
  </main>
</template>

<script setup>
import GlobalFooter from "./GlobalFooter.vue";
import GlobalHeader from "./GlobalHeader.vue";
</script>

<style lang="scss" scoped></style>
