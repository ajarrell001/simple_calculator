/* Alyssa Jarrell
  CIS 228 - JS 2
  Prof. Liss
  Spring 2022
  jnum: J00362041 */


// below functions select all elems of one class & replaces that class with a different class to change the styling of many elems on html page at once. works with css styling of these classes. 

function darkPinkTheme() { 
    let elements = document.body.querySelectorAll('.lightGreen');
    for(let i=0; i < elements.length; i++) {
    elements[i].classList.remove("lightGreen");
    elements[i].classList.add("darkPink");
    }
}

function lightGreenTheme() { // changes theme to green -- gives html elems the class of "lightGreen", removes "darkPink" class
    let elements = document.body.querySelectorAll('.darkPink');
    for(let i=0; i < elements.length; i++) {
    elements[i].classList.remove("darkPink");
    elements[i].classList.add("lightGreen");
    }
}

export {
    darkPinkTheme,
    lightGreenTheme
}