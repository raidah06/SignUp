let password=document.querySelector("#password").value;
let confirmPassword=document.querySelector("#cpassword").value;

let error =document.querySelector("#error");

if (password!=confirmPassword){
    error.innerHTML="passwords dont match"
}
