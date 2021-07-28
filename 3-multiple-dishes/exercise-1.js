import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 * Joel and Kyle come to the restaurant to eat together
 * 
 *  Joel wants the following order:
 *  A small portion of rice noodles with chicken and YouWok sauce with extra egg, red peppers and onion
 * 
 *  Kyle wants to eat:
 *  A medium portion of fine noodles with shrimps and soya sauce with extra pineapple and bamboo shoots.
 * 
 *  Complete the following code so that the test passes
 */

const preparedExtras =_

const JoelPrep = _

const kylePrep = _

const theOrder = _              

function test() {
  theOrder.then(([JoelMeal, kyleMeal]) => {
    console.assert(JoelMeal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(JoelMeal.base === bases.riceNoodles, 'Joel requested rice noodles!');
    console.assert(JoelMeal.size === sizes.small, 'Joel requested a small menu!');
    console.assert(JoelMeal.sauce === sauces.youWok, 'Joel requested YouWok sauce!');
    console.assert(JoelMeal.topping === toppings.chicken, 'Joel requested chicken!');
    console.assert(JoelMeal.extras.length === 3, 'Joel requested three extra\'s!');
    console.assert(JoelMeal.extras.includes(extras.onion), 'Joel requested onion!');
    console.assert(JoelMeal.extras.includes(extras.redPepper), 'Joel requested red peppers!');
    console.assert(JoelMeal.extras.includes(extras.egg), 'Joel requested egg!');

    console.assert(kyleMeal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(kyleMeal.base === bases.fineNoodles, 'Kyle requested fine noodles!');
    console.assert(kyleMeal.size === sizes.medium, 'Kyle requested a medium menu!');
    console.assert(kyleMeal.sauce === sauces.soya, 'Kyle requested soya sauce!');
    console.assert(kyleMeal.topping === toppings.shrimps, 'Kyle requested shrimps!');
    console.assert(kyleMeal.extras.length === 2, 'Kyle requested two extra\'s!');
    console.assert(kyleMeal.extras.includes(extras.pineapple), 'Kyle requested pineapple!');
    console.assert(kyleMeal.extras.includes(extras.bambooShoots), 'Kyle requested bamboo shoots!');

  }).catch(e => console.assert(false, 'An exception has occurred, this should not happen!\n' + e));
};
test();