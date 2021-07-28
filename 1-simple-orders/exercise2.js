import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 * Caroline wants to order the following meal:
 * 
 *  A small portion of fine noodles with tofu and curry sauce with no extra's
 * 
 *  Complete the following code so that the test passes
 */

 const theMeal = _

function test() {
  theMeal.then(meal => {
    console.assert(meal.status === STATUSES.BAGGED, 'The meal should be bagged!');

    console.assert(meal.base === bases.fineNoodles, 'Caroline requested fine noodles!');
    console.assert(meal.size === sizes.small, 'Caroline requested a small menu!');
    console.assert(meal.sauce === sauces.curry, 'Caroline requested curry sauce!');
    console.assert(meal.topping === toppings.tofu, 'Caroline requested tofu!');
    console.assert(meal.extras.length === 0, 'Caroline requested no extra\'s!');
  }).catch(e => console.assert(false, 'An exception has occurred, this should not happen!'));
};
test();