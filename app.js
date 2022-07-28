/* QUESTION 1 */

function addition(num1, num2) {
    return num1 + num2

}

console.log(addition(3, 5));

function addition(num1, num2) {
    return num1 + num2

}

console.log(addition(-3, -6));

function addition(num1, num2) {
    return num1 + num2

}

console.log(addition(7, 3));

/* QUESTION 2 */

function hoursIntoSeconds(hour) {
    return hour * 60 * 60
}

console.log(hoursIntoSeconds(2));

function hoursIntoSeconds(hour) {
    return hour * 60 * 60


}

console.log(hoursIntoSeconds(10));

function hoursIntoSeconds(hour) {
    return hour * 60 * 60

}

console.log(hoursIntoSeconds(24));

/* QUESTION 3 */

function calcPerimeter(length, width) {
    return 2 * (length + width)
}

console.log(calcPerimeter(6, 7))

function calcPerimeter(length, width) {
    return 2 * (length + width)
}

console.log(calcPerimeter(20, 10))

function calcPerimeter(length, width) {
    return 2 * (length + width)
}

console.log(calcPerimeter(2, 9))

/* QUESTION 4 */

function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height
}

console.log(calcAreaOfTriangle(3, 2))

function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height
}

console.log(calcAreaOfTriangle(10, 10))

function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height
}

console.log(calcAreaOfTriangle(20, 20))

/* QUESTION 5 */

function appendFrontend(string) {
    return string + "Frontend"
}

console.log(appendFrontend("Apple"));

function appendFrontend(string) {
    return string + "Frontend"
}

console.log(appendFrontend("Banana"));

function appendFrontend(string) {
    return string + "Frontend"
}

console.log(appendFrontend("Orange"));

/* QUESTION 6 */

function sumGreaterThan100(num1, num2) {

    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(20, 10));

function sumGreaterThan100(num1, num2) {

    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(50, 60));


function sumGreaterThan100(num1, num2) {

    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(100, -50));

/* QUESTION 7 */

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(3))

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(0))

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(-2))

/* QUESTION 8 */

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(false))

/* QUESTION 9 */

function isNotZero(num) {
    return num !== 0;
}

console.log(isNotZero("hello"))

/* QUESTION 10 */

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(8, 9))

/* QUESTION 11 */

function isOdd(num) {
    return num % 2 !== 0

}

console.log(isOdd(15))

/* QUESTION 12 */

function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
}
console.log(booleanInteger(3))

/* QUESTION 13 */

function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === "LOGGED_IN") && (subscribed === "SUBSCRIBED")
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"))

/* QUESTION 14 */

function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === "LOGGED_IN") || (subscribed === "SUBSCRIBED")
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"))