if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        indexOf : function (arr, item) {
            return arr.indexOf(item);
        },
        
        sum : function (arr) {
            return arr.reduce(function (pv, cv) { return pv + cv; }, 0);
        },
        
        remove : function (arr, item) {
            var index;
            while ((index = arr.indexOf(item)) != -1) {
                arr.splice(index, 1);
            }
            return arr;
        },
        
        removeWithoutCopy : function (arr, item) {
            var index;
            while ((index = arr.indexOf(item)) != -1) {
                arr.splice(index, 1);
            }            
            return arr;
        },
        
        append : function (arr, item) {
            arr.push(item);
            return arr;
        },
        
        truncate : function (arr) {
            arr.pop();
            return arr;
        },
        
        prepend : function (arr, item) {
            arr.unshift(item);
            return arr;
        },
        
        curtail : function (arr) {
            arr.shift();
            return arr;
        },
        
        concat : function (arr1, arr2) {
            return arr1.concat(arr2);
        },
        
        insert : function (arr, item, index) {
            arr.splice(index, 0, item);
            return arr;
        },
        
        count : function (arr, item) {
            var count = 0;
            for (var i = 0; i < arr.length; i++)
                if (arr[i] == item) count++;
            return count;
        },
        
        duplicates : function (arr) {
            var sorted_arr = arr.sort();
            var results = [];
            
            for (var i = 0; i < arr.length - 1; i++) {
                if (sorted_arr[i + 1] == sorted_arr[i] && results.indexOf(sorted_arr[i]) === -1) {
                    results.push(sorted_arr[i]);
                }
            }
            return results;
        },
        
        square : function (arr) {
            for (var i = 0; i < arr.length; i++) {
                arr[i] *= arr[i];
            }
            return arr;
        },
        
        findAllOccurrences : function (arr, target) {
            var indexes = [], i = -1;
            while ((i = arr.indexOf(target, i + 1)) != -1) {
                indexes.push(i);
            }
            return indexes;
        }
    };
});
