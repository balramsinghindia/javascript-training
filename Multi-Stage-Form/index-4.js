function redirectNext(){
    window.location.href="./index-5.html";
}  
function redirectPrev(){
    window.location.href="./index-3.html";
}

function validateCompany(){
    let compName = document.getElementById('companyname').value;
    document.getElementById('err-comp').innerHTML="";
    document.getElementById('companyname').style.borderColor="";

    if(compName.length > 0){
        if( !(/^(?:[A-Za-z]+)(?:[A-Za-z0-9 _]*)$/.test(compName))){
            document.getElementById('err-comp').innerHTML="Company should contain letter, number, spaces";
            document.getElementById('companyname').style.borderColor="red";        
        }
    }
    else {
        document.getElementById('err-comp').innerHTML="Company name cannot be empty";
        document.getElementById('companyname').style.borderColor="red";
    }
}

function validateAbn(){
    let Abn = document.getElementById('abn').value;
    document.getElementById('err-abn').innerHTML="";
    document.getElementById('abn').style.borderColor="";
    // ABN regex link : https://stackoverflow.com/questions/14174738/regex-to-match-australian-business-number-abn
    // valid code ex : I need a regex to match a value in which each character can be a digit from 0 to 9 or a space. The value must contain exactly 11 digits.
   //  it should match values in the format '012 345 678 90' or '01234567890'.
if(Abn.length > 0) {
    if(!(/^(\d *?){11}$/.test(Abn))){
             document.getElementById('err-abn').innerHTML="Enter a valid ABN number";
             document.getElementById('abn').style.borderColor="red";
        }
 }

 else {
     document.getElementById('err-abn').innerHTML = "ABN number cannot be empty";
     document.getElementById('abn').style.borderColor="red";

 }

  
}