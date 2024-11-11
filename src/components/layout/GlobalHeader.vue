<template>
  <header class="h-24 bg-blue-100 w-full shadow-lg text-gray-900">
    <div class="container-margin flex justify-between h-full">
      <div class="left">
        <div class="logo text-xl mb-2 font-sans">Cocktails</div>
        <nav>
          <router-link to="/" class="mr-2 cursor-pointer hover:underline transition-all"
            >Classics</router-link
          >
          <router-link to="/families" class="mx-2 cursor-pointer hover:underline transition-all"
            >Families</router-link
          >
          <router-link to="/about" class="mx-2 cursor-pointer hover:underline transition-all"
            >About</router-link
          >
        </nav>
      </div>

      <div class="right p-4 flex items-center justify-center gap-2">
        <router-link to="/admin" class="mr-4">Admin</router-link>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </header>
</template>

<script setup></script>
