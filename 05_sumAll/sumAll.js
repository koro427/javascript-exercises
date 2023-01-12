const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 <0) return "ERROR";
    if ( !(typeof num1 === "number") || !(typeof num2 === "number") ) return "ERROR";
    
    let bigNum;
    let smallNum;
    let result = 0;
    if (num1 >= num2) {
        bigNum = num1;
        smallNum = num2;
    } else {
        bigNum = num2;
        smallNum = num1;
    }

    for (let i = smallNum; smallNum <= bigNum; smallNum++) {
        result += smallNum;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
