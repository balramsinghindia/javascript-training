function firstNameValidation(){
    var firstname = document.forms['myform']['firstname'].value;
    if(firstname.length>24){
        document.getElementsByClassName('error-firstname')[0].innerHTML = 'Number of character must be less than 24';  
        return;
    }
    for(var i=0;i<firstname.length;i++){
        if((firstname[i]<'A'||firstname[i]>'Z') && (firstname[i]<'a'||firstname[i]>'z')){
            document.getElementsByClassName('error-firstname')[0].innerHTML = 'First Name should Contains only Letters'; 
            return;
        }
    }
    document.getElementsByClassName('error-firstname')[0].innerHTML = '';
}
function lastNameValidation(){
    var lastname = document.forms['myform']['lastname'].value;
    if(lastname.length>24){
        document.getElementsByClassName('error-lastname')[0].innerHTML = 'Number of character must be less than 24';
        return;
    }
    for(var i=0;i<lastname.length;i++){
        if((lastname[i]<'A'||lastname[i]>'Z') && (lastname[i]<'a'||lastname[i]>'z')){
            document.getElementsByClassName('error-lastname')[0].innerHTML = 'First Name should Contains only Letters'; 
            return;
        }
    }
}

function Password(){
    var password = document.forms['myform']['password'].value;
    if((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password))){
        document.getElementsByClassName('error-password')[0].innerHTML='';  
        return;
    }
    else{
        document.getElementsByClassName('error-password')[0].innerHTML='Password must be more than 8 characters at least one uppercase letter, one lowercase letter, one number and one special character';  
        return;
    }
}
function confirmPassword(){
    var password = document.forms['myform']['password'].value;
    var confirmpassword = document.forms['myform']['confirmpassword'].value;
    if(password ===confirmpassword){
        document.getElementsByClassName('error-confirmpassword')[0].innerHTML=''; 
        return;
    }
    else{
        document.getElementsByClassName('error-confirmpassword')[0].innerHTML='Password does not match'; 
    }
}


function Phone(){
    var phone = document.forms['myform']['phone'].value;
    if(phone.length>0){
        if(!(/^\d+$/.test(phone))){
            document.getElementsByClassName('error-phone')[0].innerHTML = 'Phone number should not contain charcter'; 
        }
        else if(phone.length!=10){
            document.getElementsByClassName('error-phone')[0].innerHTML = 'Phone must be of 10 length'; 
        }
    }
    else{
        document.getElementsByClassName('error-phone')[0].innerHTML = 'Enter Phone Number'; 
    }
}

function Email(){
    var email = document.forms['myform']['email'].value;
    if(email.length>0){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementsByClassName('error-email')[0].innerHTML = 'email not valid';   
        }
    }
    else{
        document.getElementsByClassName('error-email')[0].innerHTML = 'Please Enter Email';   

    }
}

function onSubmit(){
    var checkbox = document.forms['myform']['checkbox'].value;
    if(checkbox){
        firstNameValidation();
        lastNameValidation();
        Password();
        confirmPassword();
        Phone();
        Email();
    }
    else{
        alert('Please tick the checkbox');
    }
}