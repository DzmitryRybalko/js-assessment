if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
            return new Promise(function myfunction(resolve) {
                resolve(value);
            });
    },

    manipulateRemoteData : function(url) {

    }
  };
});
