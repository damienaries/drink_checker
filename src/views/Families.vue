<template>
  <section class="h-full w-full bg-white px-4">
    <div class="list flex-col w-full my-4">
      <div class="h-80 w-full my-4 rounded p-4 bg-gray-100" v-for="(family, idx) in families" :key="idx" :id="family">
        <div class="h-full w-52">
          <h3 class="text-xl">{{ family }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/***
 * horizontal scroll drink variations cards
 * use poster for 1st card
 */
const families = ['sour', 'collins', 'gimlet', 'rickey', 'daiquiri', 'sidecar', 'caipirinha', 'smash', 'martini', 'manhattan', 'old fashioned'];
</script>

<style lang="scss" scoped>

</style>