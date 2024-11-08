<template>
  <form @submit.prevent="submitForm" class="p-4 mx-auto shadow-lg rounded m-12 bg-gray-100/50">
    <h4 class="text-lg">{{ formType === "add" ? "Add" : "Edit" }} cocktail</h4>
    <div class="form-control">
      <label for="name" class="w-1/5">Name</label>
      <input type="text" id="name" v-model="newDrink.name" class="flex-1 ml-4" required />
    </div>
    <div class="form-control">
      <label for="glass" class="w-1/5">Glass</label>
      <input type="text" id="glass" v-model="newDrink.glass" class="flex-1 ml-4" required />
    </div>
    <div class="form-control">
      <label for="method" class="w-1/5">method</label>
      <select id="method" v-model="newDrink.method" class="flex-1 ml-4" required>
        <option>Shake</option>
        <option>Stir</option>
        <option>Build</option>
        <option>Dry Shake</option>
      </select>
    </div>
    <div class="form-control">
      <label for="ice" class="w-1/5">ice</label>
      <select id="ice" v-model="newDrink.ice" class="flex-1 ml-4" required>
        <option>cube</option>
        <option>crushed</option>
        <option>up</option>
      </select>
    </div>
    <div class="form-control">
      <label for="garnish" class="w-1/5">garnish</label>
      <input type="text" id="garnish" v-model="newDrink.garnish" class="flex-1 ml-4" />
    </div>
    <div class="form-control">
      <label for="imageUrl" class="w-1/5">imageUrl</label>
      <input type="text" id="imageUrl" v-model="newDrink.imageUrl" class="flex-1 ml-4" />
    </div>
    <div class="form-control">
      <label for="family" class="w-1/5">family</label>
      <select id="family" v-model="newDrink.family" class="flex-1 ml-4">
        <option>Sour</option>
        <option>Collins</option>
        <option>gimlet</option>
        <option>Rickey</option>
        <option>Daiquiri</option>
        <option>sidecar</option>
        <option>caipirinha</option>
        <option>smash</option>
        <option>Martini</option>
        <option>Manhattan</option>
        <option>Old Fashioned</option>
      </select>
    </div>
    <div class="form-control relative">
      <label for="ingredients" class="w-1/5">ingredients</label>
      <table class="w-4/5 ml-4 h-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody class="shadow p-4 bg-white">
          <!-- todo ingredient row add/remove create component with this block -->
          <tr
            v-for="(ingredient, idx) in newDrink.ingredients"
            :key="idx"
            class="border-b border-gray-100"
          >
            <td>
              <input
                class="py-2 p-4 m-1"
                type="text"
                v-model="ingredient.name"
                placeholder="add ingredient"
              />
            </td>
            <td class="py-2 px-4 m-1 flex items-center">
              <input
                id="quantity"
                v-model="ingredient.quantity"
                type="text"
                placeholder="Enter quantity"
                class="w-4/5 text-right"
              />
              <input
                disabled
                class="w-1/5 h-full"
                id="unit"
                v-if="ingredient.quantity && !isNaN(ingredient.quantity)"
                v-model="ingredient.unit"
                :placeholder="ingredient.unit"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button-component :fill="true">
      {{ formType === "add" ? "Add" : "Edit" }} Drink
    </button-component>
  </form>
</template>

<script setup>
import { addDoc, collection } from "firebase/firestore";
import { onMounted, ref } from "vue";
import db from "../../firebase/init";
import ButtonComponent from "../atoms/ButtonComponent.vue";

const emptyForm = {
  name: null,
  garnish: null,
  ice: null,
  method: null,
  glass: null,
  imageUrl: null,
  family: null,
  ingredients: [
    { name: null, quantity: null, unit: null },
    { name: null, quantity: null, unit: null },
    { name: null, quantity: null, unit: null },
    { name: null, quantity: null, unit: null },
    { name: null, quantity: null, unit: null },
  ],
};

const newDrink = ref(emptyForm);

const props = defineProps({
  formType: String,
  drink: Object | null,
});

onMounted(() => {
  if (props.drink) {
    newDrink.value = props.drink;
  }
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) return;
  });
});

const submitForm = () => {
  if (props.formType === "add") {
    addDrink();
  } else {
    console.log(newDrink.value);
    updateDrink(newDrink.value);
  }
  newDrink.value = emptyForm;
};

async function addDrink() {
  // only send ingredients needed
  newDrink.value.ingredients = newDrink.value.ingredients.filter(
    (i) => i.name !== null && i.quantity !== null
  );

  // TODO if image URL is null, find fallback/placeholder

  // save to db
  await addDoc(collection(db, "drinks"), { ...newDrink.value }).then((docRef) => {
    // todo flash message confirm action success
    console.log("Document written with ID: ", docRef.id);
  });
}

async function updateDrink(drink) {
  debugger;
  const drinkRef = doc(db, "drinks", drink.id);
  try {
    await setDoc(drinkRef, { ...drink }).then(() => {
      console.log(`drink with id ${drink.id} updated`);
    });
  } catch (e) {
    console.log(`error updating drink with id ${drink.id}`, e);
  }
}
</script>

<style scoped>
.form-control {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
}

@media screen and (max-width: 800px) {
  .form-control {
    flex-direction: column;
    align-items: flex-start;
  }
}

input,
select {
  border-radius: 8px;
  padding: 12px 20px;
  background: #fff;
}

input:focus {
  outline: 1px solid #adadad;
  transition: all 0.2s ease;
}
</style>
