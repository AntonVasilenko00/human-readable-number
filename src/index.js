module.exports = function toReadable (number) {
    let units = {
        1 : "one",
        2 : "two",
        3 : "three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : 'eight',
        9 : 'nine'
    }
    let uniqueTens =  {
        11 : "eleven",
        12 : "twelve",
        13 : "thirteen",
        14 : "fourteen",
        15 : "fifteen",
        16 : "sixteen",
        17 : "seventeen",
        18 : "eighteen",
        19 : "nineteen",
    }
    let tens = {
        1 : "ten",
        2 : "twenty",
        3 : "thirty",
        4 : "forty",
        5 : "fifty",
        6 : "sixty",
        7 : "seventy",
        8 : "eighty",
        9 : "ninety",
    }
    
    let digits = number.toString().length;
    let str = "";
    if (number == 0)
        return "zero";
    switch(digits){
        case 1:
            str = units[number];
            break;
        case 2:
            firstDigit = Math.trunc(number / 10)
            secondDigit = number % 10;
            if(number > 10 && number < 20)
                str = uniqueTens[number];
            else if (secondDigit == 0)
                str = tens[firstDigit];
            else
                str = tens[firstDigit] + " " + units[secondDigit];
            break;
        case 3:
            firstDigit = Math.trunc(number / 100);
            secondDigit = (Math.trunc(number / 10)) % 10;
            thirdDigit = number % 10;
            str += units[firstDigit] + " hundred";

            
            if(secondDigit == 1 && (thirdDigit > 0 && thirdDigit < 10))
                str += " " + uniqueTens[(10+thirdDigit)];
            else if(secondDigit == 0 && thirdDigit == 0)
                return str;
            else if (thirdDigit == 0)
                str += " " + tens[secondDigit];
            else if (secondDigit == 0 )
                str += " " + units[thirdDigit];
            else
                str += " " + tens[secondDigit] + " " + units[thirdDigit];
            break;
    }
    return str;
}
