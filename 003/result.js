/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
require('../euler').run(function () {
    var num = 600851475143, divisor = 2;
    while (num > 1) {
        if (num % divisor === 0) {
            num /= divisor;
            divisor--;
        }
        divisor++;
    }
    return divisor
});

