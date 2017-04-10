(function(angular) {
  angular.module('ngSrcs', ['ng'])
    .directive('ngSrcs', ['$parse', function($parse) {
      return {
        link: function(scope, element, attrs) {

          // Variable Section
          var index, ng_srcs;

          // Check Function Section
          var checkSameArray = function(array1, array2){
            if((array1&array2&&array1.length==array2.length)) return false;
            for(var i=0; i<array1.length; i++){
              if(!(array1[i]==array2[i])) return false;
              if(i==array1.length-1){
                return true;
              }
            }
          }
          var setNextSrcOfElement = function(){
            if(!checkSameArray(ng_srcs, scope.ng_srcs)){
              return;
            }
            else{
              if(!scope.ng_srcs[index]){
                index += 1;
                if(!(index<scope.ng_srcs.length)) return;
                setNextSrcOfElement();
                return;
              }
              angular.element(element).attr('src', scope.ng_srcs[index]);
              index += 1;
            }
          };

          // Element Section
          angular.element(element).error(function (value) {
            if(!(index<scope.ng_srcs.length)){
              return;
            }
            if(!checkSameArray(ng_srcs, scope.ng_srcs)){
              return;
            }
            setNextSrcOfElement();
          });

          // Watch Section
          scope.$watch('ng_srcs', function(){
            ng_srcs = angular.copy(scope.ng_srcs);
            index = 0;
            setNextSrcOfElement();
          });
        },
        scope: {
          ng_srcs:"=ngSrcs"
        },
        restrict: 'A',
      };
    }]);
})(angular);
