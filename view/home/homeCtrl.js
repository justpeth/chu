/**
 * Created by Administrator on 2017/1/19.
 */
angular.module("myApp").controller("homeCtrl",function($scope,$http){
    $scope.indexs=[
        {img:"index_1_02.jpg",title:"喷香排骨饭",head:"tx12.jpg",name:"喵小美",content:""},
        {img:"home_03.jpg",title:"第一次做豆沙包,小刺猬",head:"tx11.jpeg",name:"吃货",content:""},
        {img:"home_06.jpg",title:"",head:"tx7.jpg",name:"",content:""},
        {img:"home_08.jpg",title:"胡萝卜翻糖蛋糕",head:"tx10.jpg",name:"qdapmmt",content:"翻译了一个菜谱,大家有兴趣的试试"},
        {img:"home_10.jpg",title:"芋儿烧鸡",head:"tx9.jpeg",name:"mcbain",content:""},
        {img:"ind_02.jpg",title:"",head:"tx5.jpeg",name:"",content:""},
        {img:"ind_05.jpg",title:"午餐时间到",head:"tx6.jpeg",name:"芳香",content:""},
        {img:"in_02.jpg",title:"巧克力轻乳酪蛋糕",head:"tx4.jpeg",name:"烟总",content:"最近很多人提醒我做这个,今天来分享一下"},
        {img:"in_05.jpg",title:"细节的精致度变得非常小清新",head:"tx1.jpg",name:"vivi",content:""},
        {img:"inde_02.jpg",title:"",head:"tx4.jpeg",name:"",content:""},
        {img:"inde_04.jpg",title:"棒棒糖蛋糕",head:"tx3.jpg",name:"下午茶",content:""}
    ];
    //下拉刷新
    $scope.doRefresh= function(){
        $http.get("data/home.json").success(function (responseData) {
            $scope.indexs=responseData;
        }).finally(function () {
            $scope.$broadcast("scroll.refreshComplete");
        })
    };
    //无限滚动
    $scope.loadMore= function () {
        $http.get("data/home.json").success(function (responseData) {
            Array.prototype.push.apply($scope.indexs,responseData);
        }).finally(function () {
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    }
})