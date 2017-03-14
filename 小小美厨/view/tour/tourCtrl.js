/**
 * Created by 喵喵静 on 2017/2/10.
 */
angular.module('myApp').controller('tourCtrl',function($scope,$ionicSlideBoxDelegate){
    $scope.isShow=false;

    $scope.onSlideChanged=function(){
        if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
            $scope.isShow=true;
        }
    }
})