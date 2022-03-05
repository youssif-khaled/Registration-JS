var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var z= document.getElementById("button");
var username = document.getElementById("username");
var mystore;



if(localStorage.getItem("store") == null)
{
mystore = [];
}
else{
    mystore = JSON.parse(localStorage.getItem("store"));
}

function information()
{

if(inputRequired() == false)
{
  document.getElementById("message").style.color="#dc3545";
  document.getElementById("message").innerHTML = "All Input Is Required";

}
   success();
  
}

function success()
{
 
if(  signupName.value != "" &&  signupEmail.value != "" &&  signupPassword.value != "" )
{
  if(check() == false)
  {
    document.getElementById("message").innerHTML = "Email is already Exist";
  }
  else{

  
  var registers = {name:signupName.value, email:signupEmail.value, password:signupPassword.value};
      mystore.push(registers);
      localStorage.setItem( "store" ,  JSON.stringify(mystore)  );
      document.getElementById("message").style.color="#28a745";
      document.getElementById("message").innerHTML = "Success";
    }

return false;
  
  

}
  }

 function inputRequired (){
  if( signupName.value == "" ||signupEmail.value =="" ||signupPassword.value == ""){
  return false;
  }
  else{
    return true;
  }
}

function check()
 {
  for(var i =0; i < mystore.length;i++)
{   if(mystore[i].email == signupEmail.value)
  {
  return false; }
}
}


//login
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

function login()
{
   var x = signinEmail.value;
   var y = signinPassword.value;

if(x == "" || y == "")
{
  
  document.getElementById("incorrect").innerHTML = "All Input is Required";
  document.getElementById("incorrect").style.color="#dc3545";
}
else{

 for(var i = 0; i<mystore.length;i++)
 {
 localStorage.setItem("userName",mystore[i].name)
   localStorage.getItem("userName")
 if(mystore[i].email == x && mystore[i].password==y)
 {
      window.location.href="Home.html";
 }
 else{
  document.getElementById("incorrect").style.color="#dc3545";
  document.getElementById("incorrect").innerHTML = "Incorrect";
 }
 }
}

}
