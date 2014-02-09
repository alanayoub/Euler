/**
 * Euler problem 1: Multiples of 3 and 5
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * Using a minus while loop resulted in a ~60k nanosecond time for n=1000 and 23 seconds for n=1000000000 whereas
 * with the below function n can scale without a change in time
 *
 */
require('../euler').run(function () {
    var n = 1000, sum = function (d) {
        var c = Math.floor((n-1) / d);
        return d * ((c * (c + 1)) / 2)
    };
    return sum(3) + sum(5) - sum(15)
});