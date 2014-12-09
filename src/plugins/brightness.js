// install  :    cordova plugin add https://github.com/krizroring/phonegap-plugin-brightness.git
// link     :    https://github.com/fiscal-cliff/phonegap-plugin-brightness

angular.module('ngCordova.plugins.brightness', [])

  .factory('$cordovaBrightness', ['$q', '$window', function ($q, $window) {

    return {
      get: function () {
        var q = $q.defer();

        $window.cordova.plugins.brightness.getBrightness(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      set: function (data) {
        var q = $q.defer();

        $window.cordova.plugins.brightness.setBrightness(data, function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      },
      keepScreenOn: function (bool) {
        $window.cordova.plugins.brightness.setKeepScreenOn(bool, function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      }
    };
  }]);



