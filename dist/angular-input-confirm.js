/*! angular-input-confirm - v0.1.1 - 2015-09-18 */
angular.module('config', [])

.constant('bower', {name:'angular-input-confirm',description:'',version:'0.1.0',homepage:'https://github.com/thisissoon/angular-input-confirm',license:'MIT',private:false,dependencies:{angular:'~1.3.15'},devDependencies:{'angular-mocks':'~1.3.15'}})

.constant('pkg', {name:'angular-input-confirm',private:false,version:'0.1.0',description:'',repository:'https://github.com/thisissoon/angular-input-confirm',license:'MIT',dependencies:{bower:'~1.4.1',grunt:'~0.4.5'},devDependencies:{'connect-livereload':'~0.5.3','connect-modrewrite':'~0.7.11',coveralls:'~2.11.2','grunt-bump':'~0.3.0','grunt-contrib-clean':'~0.6.0','grunt-contrib-concat':'~0.5.1','grunt-contrib-connect':'~0.10.1','grunt-contrib-copy':'~0.8.0','grunt-contrib-jasmine':'~0.8.2','grunt-contrib-jshint':'~0.11.1','grunt-contrib-less':'~1.0.1','grunt-contrib-uglify':'~0.9.1','grunt-contrib-watch':'~0.6.1','grunt-contrib-yuidoc':'~0.7.0','grunt-ng-constant':'~1.1.0','grunt-processhtml':'~0.3.7','grunt-protractor-runner':'~2.0.0','grunt-protractor-webdriver':'~0.2.0','grunt-sails-linker':'^0.10.1','grunt-template-jasmine-istanbul':'~0.3.3',protractor:'~2.0.0','yuidoc-bootstrap-theme':'~1.0.4'},scripts:{postinstall:'bower install'}})

.constant('env', {BASE_URL:'/app/'})

;;'use strict';
/*
 * @module   sn.inputConfirm
 * @author   SOON_
 */
angular.module('sn.inputConfirm', [

])
/**
 * @example
    <input type='password'
           name='password_confirm'
           ng-model='password_confirm'
           sn-input-confirm='password'>
 * @constructor
 * @class snInputConfirm
 */
.directive('snInputConfirm',[
  function (){
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function($scope, $element, attrs, ctrl){

        if (!ctrl || !attrs.snInputConfirm) return; // jshint ignore:line

        /**
         * @function validate
         */
        var validate = function validate() {
          var compare = $scope.$eval( attrs.snInputConfirm ),
              viewValue = ctrl.$viewValue;

          if ( compare !== viewValue ){
            ctrl.$setValidity('inputConfirm', false);
            return viewValue;
          } else {
            ctrl.$setValidity('inputConfirm', true);
            return viewValue;
          }
        };

        ctrl.$parsers.unshift(validate);
        $scope.$watch(attrs.snInputConfirm, validate);

      }
    };
  }
]);

//# sourceMappingURL=angular-input-confirm.js.map