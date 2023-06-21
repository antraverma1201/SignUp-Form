
const firstNameEle= document.querySelector(".fn");
const lastNameEle= document.querySelector(".ln");
const emailIdEle= document.querySelector(".emailid");
const passEle= document.querySelector(".pass");
const btnsubmitEle=document.querySelector(".btn-submit");
const termsEle=document.querySelector(".terms");
const formEle=document.querySelector("#form");
const messageEle=document.querySelector(".message");

let firstName="";
let lastName="";
let emailidValue="";
let passValue="";


firstNameEle.addEventListener("keyup",(event)=>{
    firstName=event.target.value;
    // console.log(event.target.value)
});
lastNameEle.addEventListener("keyup",(event)=>{
    lastName=event.target.value;
    // console.log(event.target.value)
});
emailIdEle.addEventListener("keyup",(event)=>{
    emailidValue=event.target.value;
    // console.log(event.target.value)
});
passEle.addEventListener("keyup",(event)=>{
    passValue=event.target.value;
    // console.log(event.target.value)
});
formEle.addEventListener("submit",(event)=>{
    event.preventDefault();
})

btnsubmitEle.addEventListener('click',(event)=>{
    if(firstName.length>0 && lastName.length>0 && emailidValue.length>0 && passValue.length>0 && termsEle.checked == true){
        console.log("form submitted")
        formEle.style.display="none";
        messageEle.style.display="block";
    }
    // else{
    //     console.log("please fill the form");
    // }
})


