import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 * Eric wants to order the following meal:
 * 
 *  A medium white rice with beef and sweet chilli sauce with extra egg and onion
 * 
 *  Complete the following code so that the test passes
 */

const preparedExtras = Promise.all([extras.egg, extras.onion].map(e => prepareExtra(e)));

const mealWithoutExtras = preparePortion(sizes.medium, bases.whiteRice)
 .then(meal => addVegetables(meal))
 .then(meal => addTopping(meal, toppings.beef))
 .then(meal => addSauce(meal, sauces.sweetChilli));

const theMeal = Promise.all([preparedExtras, mealWithoutExtras])
                  .then(([thePreparedExtras, meal]) => addPreparedExtras(meal, thePreparedExtras))
                  .then(meal => bag(meal))

function test() {
  theMeal.then(meal => {
    console.assert(meal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(meal.base === bases.whiteRice, 'Eric requested white rice!');
    console.assert(meal.size === sizes.medium, 'Eric requested a medium menu!');
    console.assert(meal.sauce === sauces.sweetChilli, 'Eric requested sweet chilli sauce!');
    console.assert(meal.topping === toppings.beef, 'Eric requested beef!');
    console.assert(meal.extras.length === 2, 'Eric requested two extra\'s!');
    console.assert(meal.extras.includes(extras.onion), 'Eric requested onion!');
    console.assert(meal.extras.includes(extras.egg), 'Eric requested egg!');
  }).catch(e => console.assert(false, 'An exception has occurred, this should not happen!\n' + e));
};
test();