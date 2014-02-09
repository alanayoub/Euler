exports.isprime = function (num) {
    for (var i = 2; i * i <= num; i++) if (num % i == 0) return 0;
    return 1;
};
exports.run = function (fn) {
    var time = process.hrtime(),
        result = fn.call(exports);
    time = process.hrtime(time);
    console.log('Result: %s\n%d seconds / %d nanoseconds', result, time[0], time[1]);
};