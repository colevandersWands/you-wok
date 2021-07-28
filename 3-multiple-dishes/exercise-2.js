import { bases, extras, sauces, sizes, toppings } from "../kitchen/ingredients.js";
import { addPreparedExtras, addSauce, addTopping, addVegetables, bag, prepareExtra, preparePortion, prettyPrintMeal, STATUSES } from "../kitchen/steps.js";

/**
 * Linda, Monica, Nina and Olivia come to the restaurant to eat together
 * 
 *  Linda wants the following order:
 *  A small portion of rice noodles with chicken and YouWok sauce with extra egg, red peppers and onion
 * 
 *  Monica wants the following order:
 *  A medium portion of white rice with shrimps and soya sauce with extra pineapple.
 * 
 *  Nina wants the following order:
 *  A large portion of rice noodles with calamari and sweet sour sauce without extras.
 * 
 *  Olivia wants the following order:
 *  A large portion of rice noodles with calamari and thai sauce with extra egg, mushrooms, pineapple and broccoli.
 * 
 *  Complete the following code so that the test passes
 */

_

const theOrder = _              

function test() {
  theOrder.then(([lindaMeal, monicaMeal, ninaMeal, oliviaMeal]) => {
    console.assert(lindaMeal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(lindaMeal.base === bases.riceNoodles, 'Linda requested rice noodles!');
    console.assert(lindaMeal.size === sizes.small, 'Linda requested a small menu!');
    console.assert(lindaMeal.sauce === sauces.youWok, 'Linda requested YouWok sauce!');
    console.assert(lindaMeal.topping === toppings.chicken, 'Linda requested chicken!');
    console.assert(lindaMeal.extras.length === 3, 'Linda requested three extra\'s!');
    console.assert(lindaMeal.extras.includes(extras.onion), 'Linda requested onion!');
    console.assert(lindaMeal.extras.includes(extras.redPepper), 'Linda requested red peppers!');
    console.assert(lindaMeal.extras.includes(extras.egg), 'Linda requested egg!');

    console.assert(monicaMeal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(monicaMeal.base === bases.whiteRice, 'Monica requested white rice!');
    console.assert(monicaMeal.size === sizes.medium, 'Monica requested a medium menu!');
    console.assert(monicaMeal.sauce === sauces.soya, 'Monica requested soya sauce!');
    console.assert(monicaMeal.topping === toppings.shrimps, 'Monica requested shrimps!');
    console.assert(monicaMeal.extras.length === 1, 'Monica requested one extra!');
    console.assert(monicaMeal.extras.includes(extras.pineapple), 'Monica requested pineapple!');

    console.assert(ninaMeal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(ninaMeal.base === bases.riceNoodles, 'Nina requested rice noodles!');
    console.assert(ninaMeal.size === sizes.large, 'Nina requested a large menu!');
    console.assert(ninaMeal.sauce === sauces.sweetSour, 'Nina requested sweet sour sauce!');
    console.assert(ninaMeal.topping === toppings.shrimps, 'Nina requested shrimps!');
    console.assert(ninaMeal.extras.length === 0, 'Nina requested no extra\'s!');

    console.assert(oliviaMeal.status === STATUSES.BAGGED, 'The meal should be bagged!');
    console.assert(oliviaMeal.base === bases.riceNoodles, 'Olivia requested rice noodles!');
    console.assert(oliviaMeal.size === sizes.large, 'Olivia requested a large menu!');
    console.assert(oliviaMeal.sauce === sauces.thai, 'Olivia requested thai sauce!');
    console.assert(oliviaMeal.topping === toppings.calamari, 'Olivia requested calamari!');
    console.assert(oliviaMeal.extras.length === 4, 'Olivia requested four extra\'s!');
    console.assert(oliviaMeal.extras.includes(extras.pineapple), 'Olivia requested pineapple!');
    console.assert(oliviaMeal.extras.includes(extras.mushrooms), 'Olivia requested mushrooms!');
    console.assert(oliviaMeal.extras.includes(extras.egg), 'Olivia requested eggs!');
    console.assert(oliviaMeal.extras.includes(extras.broccoli), 'Olivia requested broccoli!');

  }).catch(e => console.assert(false, 'An exception has occurred, this should not happen!\n' + e));
};
test();