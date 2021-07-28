import { bases, extras, sauces, sizes, toppings } from "./ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal } from "./steps.js";

const aliceMeal = preparePortion(sizes.medium, bases.whiteRice)
  .then(meal => addVegetables(meal))
  .then(meal => addTopping(meal, toppings.Calamari))
  .then(meal => addSauce(meal, sauces.sweetChilli))
  .then(meal => bag(meal))
  .then(meal => feedAlice(meal));


const bobMealWithoutExtras =  preparePortion(sizes.medium, bases.whiteRice)
  .then(meal => addVegetables(meal))
  .then(meal => addTopping(meal, toppings.Calamari))
  .then(meal => addSauce(meal, sauces.sweetChilli));

const bobMeal = Promise.all([bobMealWithoutExtras,
                            prepareExtra(extras.egg),
                            prepareExtra(extras.broccoli)
                            ])
  .then(([meal, egg, broccoli]) => addPreparedExtras(meal, [egg, broccoli]))
  .then(meal => bag(meal))
  .then(meal => feedBob(meal));

const feedAlice = (meal) => {
  prettyPrintMeal(meal);
}

const feedBob = (meal) => {
  prettyPrintMeal(meal);
}

const feedEve = (meal) => {

}