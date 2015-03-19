if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        containsNumber : function (str) {
            return /\d/.test(str);
        },
        
        containsRepeatingLetter : function (str) {
            return /([a-z])\1/i.test(str);
        },
        
        endsWithVowel : function (str) {
            return /.*[aeiouAEIOU]$/.test(str);
        },
        
        captureThreeNumbers : function (str) {
            var a = str.match(/\d\d\d/);
            if (a == null || a.length <= 0) return false;
            return a[0];
        },
        
        matchesPattern : function (str) {
            return /^\d\d\d-\d\d\d-\d\d\d\d$/.test(str);
        },
        isUSD : function (str) {
            return /^\$\d\d?\d?(?:,\d\d\d)*?(?:\.\d\d)?$/.test(str);
        }
    };
});
