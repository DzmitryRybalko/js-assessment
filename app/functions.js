if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        argsAsArray : function (fn, arr) {
            return fn.apply(fn, arr);
        },
        
        speak : function (fn, obj) {
            return fn.apply(obj);
        },
        
        functionFunction : function (str) {
            return function (text) {
                return str + ', ' + text;
            }
        },
        
        makeClosures : function (arr, fn) {
            return arr.map(function (num) {
                return function () { return fn(num); };
            });
        },
        
        partial : function (fn, str1, str2) {
            return function (text) {
                return fn(str1, str2, text);
            }
        },
        
        useArguments : function () {
            var sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        },
        
        callIt : function (fn) {
            fn.apply(fn, Array.prototype.slice.call(arguments, 1));
        },
        
        partialUsingArguments : function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            return function () {
                return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
            };
        },
        
        curryIt : function (fn) {
           
        }        
    };
});
