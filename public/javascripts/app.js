var app = angular.module('enotes',['ngRoute']);
app.factory('checkfields',[function(){
  return function(fieldname,inpVal,passagain){
    console.log(fieldname);
    switch(fieldname) {
      case 'email' :
        if(inpVal === undefined || inpVal === ""){
          bootbox.alert("Email id should be something");
        }else if(inpVal.indexOf('@gmail.com') === -1){
          bootbox.alert("Invalid email id, please try again :)");
        }
        break;
      case 'nick' :
        if(inpVal === undefined || inpVal === ""){
          bootbox.alert("Please choose a nickname chintu :P");
        }
        break;
      case 'pass' :
        if(inpVal === undefined|| inpVal === ""){
          bootbox.alert("password must not be empty");
        }else if(inpVal.length < 6){
          bootbox.alert("Password must contain minimum 6 characters");
        }else if(inpVal != passagain){
          bootbox.alert("Passwords does not match, plz try again :)");
        }
        break;
    }
  };
}]);
app.component('homepage',{
  templateUrl : './html/homepage.html'
});

app.component('signup',{
  controller : function($http,$scope,checkfields){
    var globthis = this;
    this.signup = function(){

      let inpemail = globthis.email;
      let inpnick = globthis.nickname;
      let inppass = globthis.passwrd;
      let passagain = globthis.passwrdagain;
      checkfields('email',inpemail);
      checkfields('nick',inpnick);
      checkfields('pass',inppass,passagain);

    }
  },
  templateUrl : './html/signup.html'
});

app.component('login',{
  templateUrl : './html/login.html'
});
