// 1.创建模块，引用ui.router
angular.module('myApp', ['ui.router','menu','skill','school','work','hobby'])

.config(['$stateProvider',function ($stateProvider) {
  // 3.写规则 
  var menuState = {
    name: 'menu',
    url: '/menu',
    templateUrl: './views/menu.html',
    controller: 'menuCtrl'
  }

  // 配置技能页面规则 
  var skillState = {
    name: 'menu.skill',
    url: '/skill',
    templateUrl: './views/skill.html',
    controller: 'skillCtrl'
  }
  
  // 配置教育经历页面规则
  var schoolState  = {
    name: 'menu.school',
    url: '/school',
    templateUrl:'./views/school.html',
    controller: 'schoolCtrl'
  }

  var workState  = {
    name: 'menu.work',
    url: '/work',
    templateUrl:'./views/work.html',
    controller: 'workCtrl'
  }

var hobbyState  = {
    name: 'menu.hobby',
    url: '/hobby',
    templateUrl:'./views/hobby.html',
    controller: 'hobbyCtrl'
  }

  $stateProvider.state(menuState)
  $stateProvider.state(skillState)
  $stateProvider.state(schoolState)
  $stateProvider.state(workState)
  $stateProvider.state(hobbyState)
}])