<template>
  <form @submit.prevent="submitForm" class="p-4 mx-auto shadow-lg rounded bg-gray-100/50">
    <h4 class="text-lg">{{ formType === "add" ? "Add" : "Edit" }} cocktail</h4>
    <div class="form-control flex flex-col md:flex-row">
      <label for="name" class="w-1/5">Name</label>
      <input type="text" id="name" v-model="newDrink.name" class="w-full md:w-4/5" required />
    </div>
    <div class="form-control flex flex-col md:flex-row">
      <label for="glass" class="w-1/5">Glass</label>
      <input type="text" id="glass" v-model="newDrink.glass" class="w-full md:w-4/5" required />
    </div>
    <div class="form-control flex flex-col md:flex-row">
      <label for="method" class="w-1/5">method</label>
      <select id="method" v-model="newDrink.method" class="w-full md:w-4/5" required>
        <option>Shake</option>
        <option>Stir</option>
        <option>Build</option>
        <option>Dry Shake</option>
        <option>Muddle</option>
      </select>
    </div>
    <div class="form-control flex flex-col md:flex-row">
      <label for="ice" class="w-1/5">ice</label>
      <select id="ice" v-model="newDrink.ice" class="w-full md:w-4/5" required>
        <option>cube</option>
        <option>crushed</option>
        <option>up</option>
      </select>
    </div>
    <div class="form-control flex flex-col md:flex-row">
      <label for="garnish" class="w-1/5">garnish</label>
      <input type="text" id="garnish" v-model="newDrink.garnish" class="w-full md:w-4/5" />
    </div>
    <div class="form-control flex flex-col md:flex-row">
      <label for="imageUrl" class="w-1/5">imageUrl</label>
      <input type="text" id="imageUrl" v-model="newDrink.imageUrl" class="w-full md:w-4/5" />
    </div>
    <div class="form-control flex flex-col md:flex-row">
      <label for="family" class="w-1/5">family</label>
      <select id="family" v-model="newDrink.family" class="w-full md:w-4/5">
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
    <div class="flex flex-col lg:flex-row gap-2 relative">
      <label for="ingredients" class="w-full lg:w-1/5">ingredients</label>
      <div class="table w-full lg:w-4/5">
        <div class="flex table-header bg-green-100 border-b border-gray-200 text-left">
          <div class="w-3/6 py-2 px-4">Name</div>
          <div class="w-2/6 py-2 px-4 border-x border-gray-200">Quantity</div>
          <div class="w-1/6 py-2 px-4">Unit</div>
        </div>
        <ingredient-row
          v-for="(ingredient, idx) in newDrink.ingredients"
          :key="idx"
          :ingredient="ingredient"
        ></ingredient-row>
      </div>
      <div class="flex gap-2 absolute -bottom-8 right-0">
        <button-component @click.prevent="removeIngredientRow" class=""> - </button-component>
        <button-component @click.prevent="addIngredientRow" class=""> + </button-component>
      </div>
    </div>
    <div class="form-control flex flex-col md:flex-row">
      <label for="description" class="w-1/5">description</label>
      <div class="md:w-4/5 text-left">
        <input type="checkbox" v-if="!addDescription" @click="addDescription = true" />
        <textarea
          v-else
          type="text"
          id="description"
          v-model="newDrink.description"
          class="w-full"
          rows="5"
        />
      </div>
    </div>
    <button-component :fill="true">
      {{ formType === "add" ? "Add" : "Edit" }} Drink
    </button-component>
  </form>
</template>

<script setup>
import axios from "axios";
import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { onMounted, ref } from "vue";
import db from "../../../server/firebase/init";
import { getRandomParameters } from "../../../server/services/paramRandomizer.mjs";
import IngredientRow from "../IngredientRow.vue";
import ButtonComponent from "../atoms/ButtonComponent.vue";

const newDrink = ref({
  name: null,
  garnish: null,
  ice: null,
  method: null,
  glass: null,
  imageUrl: null,
  family: null,
  ingredients: [
    { name: null, quantity: null, unit: "oz" },
    { name: null, quantity: null, unit: "oz" },
    { name: null, quantity: null, unit: "oz" },
    { name: null, quantity: null, unit: "oz" },
    { name: null, quantity: null, unit: "oz" },
  ],
  description: null,
});

const addDescription = ref(false);

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

const submitForm = async () => {
  if (props.formType === "add") {
    await addDrink();
  } else {
    await updateDrink(newDrink.value);
  }
  clearForm();
};

const clearForm = () => {
  newDrink.value = {
    name: null,
    garnish: null,
    ice: null,
    method: null,
    glass: null,
    imageUrl: null,
    family: null,
    ingredients: [
      { name: null, quantity: null, unit: "oz" },
      { name: null, quantity: null, unit: "oz" },
      { name: null, quantity: null, unit: "oz" },
      { name: null, quantity: null, unit: "oz" },
      { name: null, quantity: null, unit: "oz" },
    ],
    description: null,
  };
};

async function addDrink() {
  const exists = await checkIfCocktailExists(newDrink.value.name);

  if (exists === false) {
    // filter empty ingredients rows
    newDrink.value.ingredients = newDrink.value.ingredients.filter(
      (i) => i.name !== null && i.quantity !== null
    );

    // generate image

    // save to db
    await addDoc(collection(db, "drinks"), { ...newDrink.value }).then((docRef) => {
      // todo flash message confirm action success
      console.log("Document written with ID: ", docRef.id);
    });
  } else {
    console.log("drink already exists", newDrink.value.name);
  }
}

async function updateDrink(drink) {
  const drinkRef = doc(db, "drinks", drink.id);
  const image = await generateDrinkImage(drink.name);
  debugger;

  try {
    await setDoc(drinkRef, { ...drink }).then(() => {
      console.log(`drink with id ${drink.id} updated`);
    });
  } catch (e) {
    console.log(`error updating drink with id ${drink.id}`, e);
  }
}

async function generateDrinkImage(drinkName) {
  const parameters = getRandomParameters();
  debugger;
  try {
    const response = await axios.post(
      "http://localhost:3000/api/generate-drink-image",
      drinkName,
      parameters
    );

    console.log("Image path:", response.data.imagePath);
    return response.data.imagePath;
  } catch (error) {
    console.error("Error generating image:", error.response?.data || error.message);
  }
}

async function checkIfCocktailExists(drinkName) {
  try {
    // Define the collection and query
    const cocktailsRef = collection(db, "drinks");
    const q = query(cocktailsRef, where("name", "==", drinkName));

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Check if any documents were returned
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking for cocktail:", error);
    return false;
  }
}

function addIngredientRow() {
  if (newDrink.value.ingredients.length < 10) {
    newDrink.value.ingredients.push({ name: null, quantity: null, unit: "oz" });
  }
}

function removeIngredientRow() {
  if (newDrink.value.ingredients.length > 3) {
    newDrink.value.ingredients.pop();
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
