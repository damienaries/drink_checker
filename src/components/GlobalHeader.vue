<template>
 <header class="py-4 px-6 bg-blue-100 w-full flex justify-between shadow-lg text-gray-900">
  <div class="left">
    <div class="logo text-xl mb-4 font-sans">Cocktails</div>
      <nav class="my-2">
        <router-link to="/" class="mr-2 cursor-pointer hover:underline transition-all">Classics</router-link>
        <router-link to="/families" class=" mx-2 cursor-pointer hover:underline transition-all">Families</router-link>
        <router-link to="/about" class=" mx-2 cursor-pointer hover:underline transition-all">About</router-link>
      </nav>
    </div>

  <div class="right"> <!-- hide unless have a code -->
    <router-link to="/login">Login</router-link>
  </div>
 </header>
</template>

<script setup>

</script>
