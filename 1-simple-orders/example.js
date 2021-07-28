import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 * Alice wants to order the following meal:
 * 
 *  A medium white rice with calamari and sweet chilli sauce with no extra's
 * 
 *  Complete the following code so that the test passes
 */

const aliceMeal = preparePortion(sizes.medium, bases.whiteRice)
 .then(meal => addVegetables(meal))
 .then(meal => addTopping(meal, toppings.calamari))
 .then(meal => addSauce(meal, sauces.sweetChilli))
 .then(meal => bag(meal));

function test() {
  aliceMeal.then(meal => {
    console.assert(meal.base === bases.whiteRice, 'Alice requested white rice!');
    console.assert(meal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(meal.size === sizes.medium, 'Alice requested a medium menu!');
    console.assert(meal.sauce === sauces.sweetChilli, 'Alice requested sweet chilli sauce!');
    console.assert(meal.topping === toppings.calamari, 'Alice requested calamari!');
    console.assert(meal.extras.length === 0, 'Alice requested no extra\'s!');
  }).catch(e => console.assert(false, 'An exception has occurred, this should not happen!\n' + e));
};
test();