import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 *  Geralt wants to order the following meal:
 * 
 *  A small vegetarian portion of rice noodles with satay sauce with extra spring onion, broccoli and roasted peanuts
 * 
 *  Complete the following code so that the test passes
 */

const preparedExtras =_

const mealWithoutExtras = _

const theMeal = _

function test() {
  theMeal.then(meal => {
    console.assert(meal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(meal.base === bases.riceNoodles, 'Geralt requested fine noodles!');
    console.assert(meal.size === sizes.small, 'Geralt requested a small portion!');
    console.assert(meal.sauce === sauces.satay, 'Geralt requested satay sauce!');
    console.assert(meal.topping === toppings.vegetarian, 'Geralt requested the vegetarian option!');
    console.assert(meal.extras.length === 3, 'Geralt requested three extra\'s!');
    console.assert(meal.extras.includes(extras.springOnion), 'Geralt requested spring onions!');
    console.assert(meal.extras.includes(extras.broccoli), 'Geralt requested broccoli!');
    console.assert(meal.extras.includes(extras.roastedPeanuts), 'Geralt requested roasted peanuts!');
  }).catch(e => console.assert(false, `An exception has occurred, this should not happen!\n${e}`));
};
test();