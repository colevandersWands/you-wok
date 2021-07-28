import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 * Daisy wants to order the following meal:
 * 
 *  A large portion of fine noodles with shrimps and sweet sour sauce with no extra's
 * 
 *  Complete the following code so that the test passes
 */

 const theMeal = _

function test() {
  theMeal.then(meal => {
    console.assert(meal.status === STATUSES.BAGGED, 'The meal should be bagged!');

    console.assert(meal.base === bases.fineNoodles, 'Daisy requested fine noodles!');
    console.assert(meal.size === sizes.large, 'Daisy requested a small menu!');
    console.assert(meal.sauce === sauces.sweetSour, 'Daisy requested curry sauce!');
    console.assert(meal.topping === toppings.shrimps, 'Daisy requested tofu!');
    console.assert(meal.extras.length === 0, 'Daisy requested no extra\'s!');
  }).catch(e => console.assert(false, 'An exception has occurred, this should not happen!'));
};
test();