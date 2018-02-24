var app = angular.module('enotes',['ngRoute']);
app.component('homepage',{
  templateUrl : './html/homepage.html'
});

app.component('signup',{
  controller : function($http,$scope){
    this.signup = function(){
      console.log(this.email);
      console.log(this.nickname);
      console.log(this.passwrd);
      console.log(this.passwrdagain);
    }
  },
  templateUrl : './html/signup.html'
});

app.component('login',{
  templateUrl : './html/login.html'
});
