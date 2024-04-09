var form=document.querySelector("#form")
var username=document.querySelector("#username")
var email=document.querySelector("#email")
var password=document.querySelector("#password")
var cpass=document.querySelector("#cpass")
form.addEventListener("submit", (event)=>{
   
   if(!validateInputs()){
   event.preventDefault();
   }
})
function validateInputs(){
    var userval=username.value.trim()
    var emailval=email.value.trim();
    var passwordval=password.value.trim();
    var cpassval=cpass.value.trim();
    let success = true;



    if(userval===''){
        success=false;
        setError(username,"username is required")
    }
    else{
        setSuccess(username)
    }
    if(emailval===''){
        success=false;
        setError(email,"email is required")
    }else if(!validateEmail(emailval)){
       setError(email,"enter a valid Email")
    }
    else{
        setSuccess(email)
    }
    if(passwordval===''){
        success=false;
        setError(password,"password is required")
    }
    else if(passwordval.length<8){
        setError(password,"password must be atleast 8 characters ")
    }
    else{
        setSuccess(password)
    }
    if(cpassval===''){
        success=false;
        setError(cpass,"confirm password is required")
    }
    else if(cpassval!==passwordval){
        setError(cpass,"password does not match")
    }
    else{
        setSuccess(cpass)
    }
     return success;

}



function setError(element,message){
    var inputGroup=element.parentElement;
    var errorElement=inputGroup.querySelector(".error")
    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove("success") 
}
function setSuccess(element){
    var inputGroup=element.parentElement;
    var errorElement=inputGroup.querySelector(".error")
    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove("error")
}
const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
}