module.exports = function toReadable(number) {
    const singleAndTwoPrimes = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    function readTwoDigits(number) {
        if (number >= 20 && number < 100) {
            let result = String(number);
            return +result[1] > 0
                ? tens[result[0] - 1] + " " + singleAndTwoPrimes[+result[1]]
                : tens[result[0] - 1];
        }
    }
    if (number < 20) {
        return singleAndTwoPrimes[number];
    }
    if (number >= 20 && number < 100) {
        return readTwoDigits(number);
    }

    if (number >= 100) {
        let numberParts = String(number);
        let result = singleAndTwoPrimes[+numberParts[0]] + " hundred";
        if (numberParts.slice(1) === "00") {
            return result;
        }
        if (+numberParts[2] === 0) {
            return result + " " + tens[numberParts[1] - 1];
        }
        return +numberParts.slice(1) < 20
            ? result + " " + singleAndTwoPrimes[+numberParts.slice(1)]
            : result +
                  " " +
                  tens[+numberParts[1] - 1] +
                  " " +
                  singleAndTwoPrimes[+numberParts[2]];
    }
};
