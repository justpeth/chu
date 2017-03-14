/**
 * Created by Administrator on 2017/1/17.
 */
angular.module("myApp", ['ionic']);
angular.module("myApp")
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        //跨平台兼容性
        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');
        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');
        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');
        /*$ionicConfigProvider.backButton.text("");
         $ionicConfigProvider.backButton.previousTitleText("")*/
        $stateProvider
            .state("tour", {
                url: "/tour",
                templateUrl: "view/tour/tour.html",
                controller: "tourCtrl"
            })
        // 一级路由：加载tabs.html，但不要直接显示
            .state("tabs", {
                url: "/tabs",
                abstract: true,  // 抽象地，意思是不直接显示
                templateUrl: "view/tabs/tabs.html",
            })
            //首页
            .state("tabs.home", {
                url: "/home",
                views: {
                    "tab-home": {
                        templateUrl: "view/home/home.html",
                        controller: "homeCtrl"
                    }
                }
            })
            //搜索
            .state("tabs.search", {
                url: "/search",
                views: {
                    "tab-home": {
                        templateUrl: "view/home/search.html",
                    }
                }
            })
            //创建菜谱
            .state("tabs.create", {
                url: "/create",
                views: {
                    "tab-home": {
                        templateUrl: "view/home/create.html",
                    }
                }
            })
            //菜单
            .state("tabs.menu", {
                url: "/menu",
                views: {
                    "tab-home": {
                        templateUrl: "view/home/menu.html",
                        controller: "menuCtrl"
                    }
                }
            })
            //视频菜谱
            .state("tabs.stvideo", {
                url: "/stvideo",
                views: {
                    "tab-home": {
                        templateUrl: "view/home/stvideo.html",
                        controller: "stvideoCtrl"
                    }
                }
            })
            //活动
            .state("tabs.active", {
                url: "/active",
                views: {
                    "tab-home": {
                        templateUrl: "view/home/active.html",
                        controller: "activeCtrl"
                    }
                }
            })
            //签到
            .state("tabs.sign", {
                url: "/sign",
                views: {
                    "tab-home": {
                        templateUrl: "view/home/sign.html",
                        controller: "mallCtrl"
                    }
                }
            })

            //详情
            .state("tabs.product", {
                url: "/product",
                views: {
                    "tab-home": {
                        templateUrl: "view/home/product.html"
                    }
                }
            })
            //商城
            .state("tabs.mall", {
                url: "/mall",
                views: {
                    "tab-mall": {
                        templateUrl: "view/mall/mall.html",
                        controller: "mallCtrl"
                    }
                }
            })
            //课堂
            .state("tabs.class", {
                url: "/class",
                views: {
                    "tab-class": {
                        templateUrl: "view/class/class.html",
                        //controller:"classCtrl"
                    }
                }
            })
            .state("tabs.class.video", {
                url: "/video",
                views: {
                    "tab-video": {
                        templateUrl: "view/class/video/video.html",
                        controller: "videoCtrl"
                    }
                }
            })
            .state("tabs.class.direct", {
                url: "/direct",
                views: {
                    "tab-direct": {
                        templateUrl: "view/class/direct/direct.html",
                        controller: "directCtrl"
                    }
                }
            })
            .state("tabs.class.offline", {
                url: "/offline",
                views: {
                    "tab-offline": {
                        templateUrl: "view/class/offline/offline.html",
                        controller: "offlineCtrl"
                    }
                }
            })
            //厨说
            .state("tabs.community", {
                url: "/community",
                views: {
                    "tab-community": {
                        templateUrl: "view/touch/community.html",
                        controller: "touchCtrl"
                    }
                }
            })
            .state("tabs.touch", {
                url: "/touch",
                views: {
                    "tab-community": {
                        templateUrl: "view/touch/touch.html",
                        controller: "touchCtrl"
                    }
                }
            })
            .state("tabs.about", {
                url: "/about",
                views: {
                    "tab-about": {
                        templateUrl: "view/about/about.html",
                    }
                }
            })
            //信息
            .state("tabs.message", {
                url: "/message",
                views: {
                    "tab-about": {
                        templateUrl: "view/about/message.html",
                    }
                }
            })
            //设置
            .state("tabs.set", {
                url: "/set",
                views: {
                    "tab-about": {
                        templateUrl: "view/about/set.html",
                    }
                }
            })
        $urlRouterProvider.otherwise("/tour");
    })
    .controller('myCtrl', function ($scope) {
        $scope.activeSlide=0;     //保存当前轮播图片的索引
        //页面切换时
        $scope.onSlideChanged= function (index) {
            $scope.activeSlide=index;
        };
        //单击分页器时
        $scope.pagerClick= function (index) {
            $scope.activeSlide=index;
        }
    })