import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 * Bob wants to order the following meal:
 * 
 *  A large portion of rice noodles with chicken and teriyaki sauce with no extra's
 * 
 *  Complete the following code so that the test passes
 */

 const theMeal = _

function test() {
  theMeal.then(meal => {
    console.assert(meal.status === STATUSES.BAGGED, 'The meal should be bagged!');

    console.assert(meal.base === bases.riceNoodles, 'Bob requested rice noodles!');
    console.assert(meal.size === sizes.large, 'Bob requested a large menu!');
    console.assert(meal.sauce === sauces.teriYaki, 'Bob requested teriyaki sauce!');
    console.assert(meal.topping === toppings.chicken, 'Bob requested chicken!');
    console.assert(meal.extras.length === 0, 'Bob requested no extra\'s!');
  }).catch(e => console.assert(false, 'An exception has occurred, this should not happen!'));
};
test();