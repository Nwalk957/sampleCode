/**
 * Created by nwalker on 3/22/17.
 */

(function(){
    'use strict';

    angular
        .module('app', ['ui.router', 'ui.bootstrap' ,'templates'])
        .config(StateConfig)
        .run(Run);

    function StateConfig($stateProvider, $urlRouterProvider, $locationProvider){

        $locationProvider.hashPrefix('');

        $urlRouterProvider.otherwise('/dashboard/home');

        $stateProvider

            .state('dashboard', {
                url: '/dashboard',
                abstact: true,
                templateUrl: 'angular-app/views/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'vm'
            })

            .state('dashboard.home', {
                url: '/home',
                abstact: true,
                templateUrl: 'angular-app/views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })

            .state('dashboard.about',{
                url:'/about',
                templateUrl: 'angular-app/views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'vm'
            })

    }

    function Run($rootScope, $state, $stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

})();


