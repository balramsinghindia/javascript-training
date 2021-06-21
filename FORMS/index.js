const errorMessage = [
    {
        firstName : "First-Name should be within 24 characters only",
        lastName : "First-Name cannot be empty"
    }
];



function validateName(){
    console.log("on blur of input is activated");
    var regex = new  RegExp("/^([^0-9]*)$/");

    let getInputValue = document.getElementById('firstname').value;

    if(getInputValue){

         for(let i=0 ; i < getInputValue.length ; i++) {
            if((getInputValue[i]<'A'||getInputValue[i]>'Z') && (getInputValue[i]<'a'||getInputValue[i]>'z')){
                document.getElementById('err-one').innerHTML="FirstName should contain only characters";
                console.log('running-loop');
            }
        }
        if((getInputValue.length > 24)  ) {
             document.getElementById('err-one').innerHTML="First-Name should be within 24 characters only";   
        }
    }
   
    else {
        let getPara = document.getElementById('err-one').innerHTML="First-Name cannot be empty";
        console.log('input is null');
        console.log(getPara);
    } 
}

function validateNametwo(){

    console.log("on blur of input is activated");
    var regex = new  RegExp("/^([^0-9]*)$/");

    let getInputValue = document.getElementById('lastname').value;

    if(getInputValue){

         for(let i=0 ; i < getInputValue.length ; i++) {
            if((getInputValue[i]<'A'||getInputValue[i]>'Z') && (getInputValue[i]<'a'||getInputValue[i]>'z')){
                document.getElementById('err-two').innerHTML="FirstName should contain only characters";
                console.log('running-loop');
            }
        }
        if((getInputValue.length > 24)  ) {
             document.getElementById('err-two').innerHTML="First-Name should be within 24 characters only";   
        }
    }
   
    else {
        let getPara = document.getElementById('err-two').innerHTML="First-Name cannot be empty";
        console.log('input is null');
        console.log(getPara);
    } 
}


function validateEmail(){

    console.log('email is validated');

    var getInputValue=document.getElementById('email').value;

    let getInputValueString=getInputValue.toString();

    if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(getInputValueString)){
        console.log('email is validated');
       
    }

    else {
        console.log('in else section');
        document.getElementById('err-three').innerHTML="Please Enter a Valid Email-address";

    }
}

function validatePhone(){

    let getInputValue=document.getElementById('phone').value.toString();
    console.log(getInputValue);

    if(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(getInputValue)){
        console.log('email is validated');
    }

    else {
        document.getElementById('err-four').innerHTML="Enter a Valid Phone Number";
    }
}

function validatePassword(){

    let getInputValue = document.getElementById('password').value;
    console.log(getInputValue);
    if((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(getInputValue))){
        console.log("password-validated");
    }

    else {
        document.getElementById('err-five').innerHTML="Password Must include altleast 8 character ,1-lowercase 1-uppercase 1-special character";
    }
}

function validateConfirmPassword(){

    let getInputValue = document.getElementById('confirmpassword').value.toString();
    let password = document.getElementById('password').value.toString();
    console.log(getInputValue);

    if(getInputValue == password){
        console.log('confirm-password validated');
    }

  else {
    document.getElementById('err-six').innerHTML="Confirm Password Must be Same as Password";

  }

}