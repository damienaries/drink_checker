/** *****************
 *
 *  interface Cocktail {
 * name:string
 * method string
 * glass string|array
 * ice string|null
 * garnish string | null
 * ingredients Ingredient[]
 * }
 *
 * interface Ingredient {
 * name string
 * quantity int|float|string
 * }
 *  *********************** */

const cocktails = [
  {
    name: "americano",
    method: "built",
    glass: "highball",
    ice: "cubes",
    garnish: "orange",
    ingredients: [
      { name: "campari", quantity: 1.5 },
      { name: "sweet vermouth", quantity: 1 },
      { name: "soda water", quantity: "top" },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "aviation",
    method: "shaken",
    glass: "coupe",
    ice: false,
    garnish: "cherry",
    ingredients: [
      { name: "gin", quantity: 2 },
      { name: "maraschino", quantity: 0.75 },
      { name: "lemon juice", quantity: 0.75 },
      { name: "creme de violette", quantity: "2 dash" },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "bamboo",
    method: "stirred",
    glass: "coupe",
    ice: false,
    garnish: "orange",
    ingredients: [
      { name: "fino sherry", quantity: 1.5 },
      { name: "sweet vermouth", quantity: 1.5 },
      { name: "angostura", quantity: "1 dash" },
      { name: "orange bitters", quantity: "1 dash" },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "barbados swizzle",
    method: ["built", "swizzle"],
    glass: ["tiki", "pilsner"],
    ice: "crushed",
    garnish: ["mint", "lime", "nutmeg"],
    ingredients: [
      { name: "goslings dark", quantity: 2 },
      { name: "lime juice", quantity: 0.75 },
      { name: "simple syrup", quantity: 0.5 },
      { name: "pineapple juice", quantity: 0.5 },
      { name: "falernum", quantity: 0.5 },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "bee's kiss",
    method: "shaken",
    glass: "coupe",
    ice: false,
    garnish: "nutmeg",
    ingredients: [
      { name: "aged rum", quantity: 2 },
      { name: "cream", quantity: 0.75 },
      { name: "honey syrup", quantity: 0.75 },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "bee's knees",
    method: "shaken",
    glass: "coupe",
    ice: false,
    garnish: null,
    ingredients: [
      { name: "gin", quantity: 2 },
      { name: "lemon juice", quantity: 0.75 },
      { name: "honey syrup", quantity: 0.75 },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "blood and sand",
    method: "shaken",
    glass: "coupe",
    ice: false,
    garnish: "orange",
    ingredients: [
      { name: "blended scotch", quantity: 1 },
      { name: "sweet vermouth", quantity: 0.75 },
      { name: "cherry heering", quantity: 0.75 },
      { name: "oragne juice", quantity: 0.75 },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "bobby burns",
    method: "stirred",
    glass: "coupe",
    ice: false,
    garnish: "lemon",
    ingredients: [
      { name: "scotch", quantity: 2 },
      { name: "sweet vermouth", quantity: 1 },
      { name: "benedictine", quantity: 0.25 },
      { name: "angostura", quantity: "2 dash" },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "bourbon smash",
    method: "shaken",
    glass: "DOF",
    ice: "crushed",
    garnish: "mint sprig",
    ingredients: [
      { name: "bourbon", quantity: 2 },
      { name: "lemon juice", quantity: 0.75 },
      { name: "simple syrup", quantity: 0.75 },
      { name: "angostura", quantity: "3 dash" },
      { name: "mint", quantity: "pinch" },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "bourbon sour",
    method: "dry shaken",
    glass: "OF",
    ice: false,
    garnish: "dash bitters",
    ingredients: [
      { name: "bourbon", quantity: 2 },
      { name: "lemon juice", quantity: 0.75 },
      { name: "simple syrup", quantity: 0.75 },
      { name: "egg white", quantity: 1 },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "bramble",
    method: ["muddled", "shaken"],
    glass: "DOF",
    ice: "crushed",
    garnish: ["mint sprig", "blackberry"],
    ingredients: [
      { name: "gin", quantity: 2 },
      { name: "lemon juice", quantity: 0.75 },
      { name: "simple syrup", quantity: 0.75 },
      { name: "blackberries", quantity: 3 },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "brandy crusta",
    method: "shaken",
    glass: "coupe",
    ice: false,
    garnish: ["sugar rim", "lemon"],
    ingredients: [
      { name: "cognac", quantity: 1.5 },
      { name: "cointreau", quantity: 0.5 },
      { name: "lemon juice", quantity: 0.75 },
      { name: "maraschino", quantity: 0.25 },
      { name: "angostura", quantity: "2 dash" },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "brandy flip",
    method: "dry shaken",
    glass: "coupe",
    ice: false,
    garnish: "nutmeg",
    ingredients: [
      { name: "cognac", quantity: 2 },
      { name: "cream", quantity: 0.75 },
      { name: "simple syrup", quantity: 0.75 },
      { name: "whole egg", quantity: 1 },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "bronx",
    method: "shaken",
    glass: "coupe",
    ice: false,
    garnish: null,
    ingredients: [
      { name: "gin", quantity: 1.5 },
      { name: "sweet vermouth", quantity: 0.5 },
      { name: "dry vermouth", quantity: 0.5 },
      { name: "orange juice", quantity: 0.75 },
      { name: "lemon juice", quantity: 0.25 },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "brooklyn",
    method: "stirred",
    glass: "coupe",
    ice: false,
    garnish: "cherry",
    ingredients: [
      { name: "rye", quantity: 2 },
      { name: "amer picon", quantity: 0.5 },
      { name: "maraschino", quantity: 0.25 },
      { name: "dry vermouth", quantity: 0.25 },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
  {
    name: "caipirinha",
    method: ["muddled", "shaken", "dumped"],
    glass: "DOF",
    ice: "crushed",
    garnish: null,
    ingredients: [
      { name: "cachaca", quantity: 2 },
      { name: "simple syrup", quantity: 0.75 },
      { name: "lime", quantity: "1/2, cut in 6" },
    ],
    imageUrl: "https://source.unsplash.com/random?cocktail,mixology",
  },
];

export default cocktails;
