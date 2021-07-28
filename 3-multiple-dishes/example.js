import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 * Harry and Ingrid come to the restaurant to eat together
 * 
 *  Harry wants the following order:
 *  A medium white rice with beef and sweet chilli sauce with extra egg and onion
 * 
 *  Ingrid wants to eat:
 *  A large portion of fine noodles with shellfish and sweet chilli sauce with extra pineapple and mushrooms
 * 
 *  Complete the following code so that the test passes
 */

const preparedExtras = Promise.all([extras.egg, extras.onion, extras.pineapple, extras.mushrooms].map(e => prepareExtra(e)));

const harryPrep = preparePortion(sizes.medium, bases.whiteRice)
                      .then(meal => addVegetables(meal))
                      .then(meal => addTopping(meal, toppings.beef))
                      .then(meal => addSauce(meal, sauces.sweetChilli));

const ingridPrep = preparePortion(sizes.large, bases.fineNoodles)
                    .then(meal => addVegetables(meal))
                    .then(meal => addTopping(meal, toppings.shellfish))
                    .then(meal => addSauce(meal, sauces.sweetChilli));

const theOrder = Promise.all([harryPrep, ingridPrep, preparedExtras])
                  .then(([hMeal, iMeal, [egg, onion, pineapple, mushrooms]]) => Promise.all([addPreparedExtras(hMeal, [egg, onion]),
                                                                                             addPreparedExtras(iMeal, [pineapple, mushrooms])])) 
                  .then(([hMeal, iMeal]) => Promise.all([bag(hMeal), bag(iMeal)]));              

function test() {
  theOrder.then(([hMeal, iMeal]) => {
    console.assert(hMeal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(hMeal.base === bases.whiteRice, 'Harry requested white rice!');
    console.assert(hMeal.size === sizes.medium, 'Harry requested a medium menu!');
    console.assert(hMeal.sauce === sauces.sweetChilli, 'Harry requested sweet chilli sauce!');
    console.assert(hMeal.topping === toppings.beef, 'Harry requested beef!');
    console.assert(hMeal.extras.length === 2, 'Harry requested two extra\'s!');
    console.assert(hMeal.extras.includes(extras.onion), 'Harry requested onion!');
    console.assert(hMeal.extras.includes(extras.egg), 'Harry requested egg!');

    console.assert(iMeal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(iMeal.base === bases.fineNoodles, 'Ingrid requested white rice!');
    console.assert(iMeal.size === sizes.large, 'Ingrid requested a large menu!');
    console.assert(iMeal.sauce === sauces.sweetChilli, 'Ingrid requested sweet chilli sauce!');
    console.assert(iMeal.topping === toppings.shellfish, 'Ingrid requested shellfish!');
    console.assert(iMeal.extras.length === 2, 'Ingrid requested two extra\'s!');
    console.assert(iMeal.extras.includes(extras.pineapple), 'Ingrid requested pineapple!');
    console.assert(iMeal.extras.includes(extras.mushrooms), 'Ingrid requested mushrooms!');

  }).catch(e => console.assert(false, 'An exception has occurred, this should not happen!\n' + e));
};
test();