const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsList = ingredients.map(name => {  
  const ingredient = document.createElement('li');

  ingredient.classList.add('item');
  ingredient.textContent = `${name}`;
  
  return ingredient;
});

ingredientsList.append(...makeIngredientsList);