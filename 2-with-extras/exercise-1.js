import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 *  Fien wants to order the following meal:
 * 
 *  A large portion of fine noodles with shellfish and sweet chilli sauce with extra pineapple and mushrooms
 * 
 *  Complete the following code so that the test passes
 */

const preparedExtras =_

const mealWithoutExtras = _

const theMeal = _

function test() {
  theMeal.then(meal => {
    console.assert(meal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(meal.base === bases.fineNoodles, 'Fien requested fine noodles!');
    console.assert(meal.size === sizes.large, 'Fien requested a large portion!');
    console.assert(meal.sauce === sauces.sweetChilli, 'Fien requested sweet chilli sauce!');
    console.assert(meal.topping === toppings.shellfish, 'Fien requested shellfish!');
    console.assert(meal.extras.length === 2, 'Fien requested two extra\'s!');
    console.assert(meal.extras.includes(extras.pineapple), 'Fien requested pineapple!');
    console.assert(meal.extras.includes(extras.mushrooms), 'Fien requested mushrooms!');
  }).catch(e => console.assert(false, `An exception has occurred, this should not happen!\n${e}`));
};
test();