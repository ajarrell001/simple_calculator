/* Alyssa Jarrell
  CIS 228 - JS 2
  Prof. Liss
  Spring 2022
  jnum: J00362041 */


import * as calcHandling from './calcHandling_functions.mjs';
import * as themes from './theme_functions.mjs';


function start() { // start adds all event listeners to elems on html page
  // button click event listeners
  document.querySelector('#form').addEventListener('submit', calcHandling.calculate); // listens for '=' submit button click on page
  document.querySelector('#clear').addEventListener('click', calcHandling.clearForm); // listens for click of 'clear' button on page -- resets
  document.querySelector('#darkPink').addEventListener('click', themes.darkPinkTheme); // listens for 'pink' button click on page -- selects theme
  document.querySelector('#lightGreen').addEventListener('click', themes.lightGreenTheme);// listens for 'green' button click on page -- selects theme
}
start();


