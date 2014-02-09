/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two
 * 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
require('../euler').run(function () {
    var ispalindrome = function (num) {
        num = num.toString().split('');
        return num[0] === num[5] && num[1] === num[4] && num[2] === num[3]
    };
    var largest = function () {
        var first = 999, second = 999, result = 0, mul;
        while (first + second > 1) {
            mul = first * second;
            result = ispalindrome(mul) && mul > result ? mul : result;
            if (first != 0) first--; else first = 999, second--;
        }
        return result
    }
    return largest()
});