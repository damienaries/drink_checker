<template>
  <layout>
  <router-view />
  </layout>
</template>

<script setup>
import { collection, addDoc } from 'firebase/firestore'
import db from './firebase/init.js'
import Layout from './components/Layout.vue'
import { onMounted } from 'vue'

onMounted(() => {
  createUser();
})

const createUser = async () => {
  // 'users' collection reference
  const colRef = collection(db, 'users');

  // data to send
  const dataObj = {
    firstName: 'john',
    lastname: 'doe',
    dob: '1990'
  }

  // create document and return reference to it
  const docRef = await addDoc(colRef, dataObj);

  // Access auto-generated id at '.id'
  console.log('document created with id:', docRef.id)
}

</script>
