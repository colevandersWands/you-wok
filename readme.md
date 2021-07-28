# Getting Started

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
   - `npm install -g study-lenses` (if you do not have it already)
   - `npm update -g study-lenses` (if you already have it installed)
2. Clone this repository:
   - `git clone git@github.com:HackYourFutureBelgium/asynchronous-programming.git` (SSH) (recommended)
   - `git clone https://github.com/HackYourFutureBelgium/asynchronous-programming.git` (HTTPS)
   - `gh repo clone HackYourFutureBelgium/asynchronous-programming` (GH CLI)
3. `cd` into the repository
   - `cd asynchronous-programming`
4. Run the `study` command from your CLI 
   - `study`
5. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

# The smart restaurant
In this exercise we are going to emulate a restaurant that makes meals based on the preferences of the guests.

![The menu](./menu-french.jpg?raw=true "The menu")

## The preparation process:
Every meal needs to go through the following steps:

- Select a size and a base to prepare the meal
- Add the vegetables to the portion
- select and add the topping
- pick and add the sauce
- add the previously prepared extra's to the meal
- bag the finished meal

And every step can only be started after the previous step has finished.
Two separate meals can however be prepared at the same time.

Also important to note is that all extra's need to be prepared before they can be added to the meal. The preparation of these extra's can be done in parallel to the preparation of the meals themselves. 

## The exercise
Inside the kitchen/steps.js files you can find exported functions for every step of the preparation process. The required values for the ingredients can be found in the kitchen/ingredients.js file.

Examples on how to use the files can be found in the example.js files in the 1-simple-orders, 2-with-extras and 3-multiple-dishes directories. 
Based on these examples try to complete the exercises in these directories.