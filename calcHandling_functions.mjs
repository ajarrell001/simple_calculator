import * as mathFunctions from './arithmetic_functions.mjs';

    function calculate(e) { // calculate function -- called when user clicks submit button "="
        /* prevent default form submit settings */
        e.preventDefault();
        const answerHere = document.querySelector("#answerHere"); // where math problem and answer are generated once calculation is performed
        const num1 = Number(document.querySelector("#number1").value); // first number selected by user
        const num2 = Number(document.querySelector("#number2").value); // second number selected by user
        const operator = document.querySelector("#operation").value; // operation selected by user
        // operationHandling function takes user input to call correct mathFunction based on operation selected
        return operationHandling(num1, num2, operator);
      }

    function operationHandling(a, b, operator) { // calls function based on operator chosen by user
        if (operator === "+") {
            let answer = mathFunctions.add(a, b);
            showOnPage(a, b, answer, operator);
            return answer;
        } else if (operator === "-") {
            let answer = mathFunctions.subtract(a, b, operator);
            showOnPage(a, b, answer, operator);
            return answer;
        } else if (operator === "*") {
            let answer = mathFunctions.multiply(a, b);
            showOnPage(a, b, answer, operator);
            return answer;
        } else if (operator === "/") {
            let answer = mathFunctions.divide(a, b);
            showOnPage(a, b, answer, operator);
            return answer;
        }
    }

    function showOnPage(a, b, answer, operator) { // shows math operation on page w/ answer
        let result = parseFloat(answer.toFixed(4)); // sets result to 4 decimal places max
        let mathExpression = `${a} ${operator} ${b} = ${result}`;
        answerHere.innerHTML = mathExpression;
        answerHere.classList = 'show'; // class 'show' reveals elem
        return mathExpression;
    }

    function clearForm() { // clears all user input
        document.querySelector("#form").reset();
        answerHere.textContent = ""; // removes text
        answerHere.classList = 'noShow'; // class 'noShow' sets elem display: none
    }


export {
    calculate,
    operationHandling,
    clearForm
}