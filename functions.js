/**
 * Converts a number to a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString ( n ) {
        var convertNumber = n.toString( );
        return convertNumber;

}

numberToString ( 5 );

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 function increase ( n ) {
        var newNum = n + 1;
        return newNum;

 }

 increase ( 11 );

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease ( n ) {
        var newNum = n - 1;
        return newNum;

}

decrease ( 9 );

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 function add ( x, y ) {
        var sum = x + y;
        return sum;

 }

 add ( 12, 9 );


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 function subtract ( x, y ) {
        var difference = x - y;
        return difference;

 }

 subtract ( 10, 5 );

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply ( x, y ) {
        var product = x * y;
        return product;

 }

 multiply ( 3, 5 );

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 function divide ( x, y ) {
        var quotient = x / y;
        return quotient;

 }

 divide ( 15, 3 );


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 function square ( x ) {
        var getSquare = x * x;
        return getSquare;

 }

 square ( 14 );
 console.log( square ( 14 )  );


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 function calculate ( operation, x, y ) {
         var expression;
         var writtenExpression;
        switch ( operation ) {
                case 'add':
                        expression = x + y;
                        writtenExpression = `${ x } + ${ y } = ${ expression }`;
                        break;
                case 'subtract':
                        expression = x - y;
                        writtenExpression = `${ x } - ${ y } = ${ expression }`;
                        break;
                case 'multiply':
                        expression = x * y;
                        writtenExpression = `${ x } * ${ y } = ${ expression }`;
                        break;
                case 'divide':
                        expression = x / y;
                        writtenExpression = `${ x } / ${ y } = ${ expression }`;
                        break;
                default:
                        expression = 0;
                        writtenExpression = 'Case is default. No written expression.';
                        break;                      

        }
        console.log( `The operation is ${ operation }` );
        console.log( `The expression is ${ expression }` );
        console.log( `The written expression is ${ writtenExpression }`);
        console.log( writtenExpression );
        return expression;

 }

 calculate ( 'add', 4, 7 );

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan ( a, b) {
        if ( a > b ) {
                return 'true, \'a\' is greater than \'b\'';

        }

}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

