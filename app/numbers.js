if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        valueAtBit: function (num, bit) {
            var arr = num.toString(2).split('');
            return parseInt(arr[arr.length - bit]);
        },
        
        base10: function (str) {
            return parseInt(str, 2);
        },
        
        convertToBinary: function (num) {
            var str = num.toString(2);
            return new Array(9 - str.length).join('0') + str;
        },
        
        multiply: function (a, b) {
            var coef = 10
            return (a * coef) * (b * coef) / (coef * coef);
        }
    };
});

