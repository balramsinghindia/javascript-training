function redirectNext(){
    window.location.href="./index-4.html";
}  
function redirectPrev(){
    window.location.href="./index-2.html";
}  

const country = {
    India : ['andhra','bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala'],
    Australia : ['Ashmore and Cartier Islands','Australian Antarctic Territory','Australian Capital Territory (ACT)','Christmas Island','Cocos (Keeling) Islands','Coral Sea Islands','Heard Island and McDonald Islands','Jervis Bay Territory','Norfolk Island','Northern Territory (NT)'],
    Uk : ['Bedfordshire','Berkshire','Bristol','Buckinghamshire','Cambridgeshire','Cheshire','City of London','Cornwall','Cumbria']
}

var India = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];
var Australia = ['Ashmore and Cartier Islands','Australian Antarctic Territory','Australian Capital Territory (ACT)','Christmas Island','Cocos (Keeling) Islands','Coral Sea Islands','Heard Island and McDonald Islands','Jervis Bay Territory','Norfolk Island','Northern Territory (NT)'];

function listCity(){
    console.log('Australia is clicked');
   let country = document.getElementById('country').value;
   if(country == "Australia"){
    // document.getElementById('city').value = country.Australia;
    // document.getElementById('Australia').innerHTML=country.Australia;
    // let clearCountry = document.getElementById('option');
    // clearCountry.remove();
    for(let i=0 ; i < Australia.length; i++){
        console.log(i);
        let optionValue = Australia[i];
        var element = document.createElement('option');
        element.value = optionValue;
        console.log(element.value);
        element.innerHTML = Australia[i];
        var select = document.getElementById('city');
        select.appendChild(element);

        
      if(country != "India"){
        // let cityOptions = document.getElementById('city');
        // cityOptions.options.length = '';
         let cityOptions = document.getElementById('city');
        cityOptions.options.style.display = 'none';
    }  
    }
   }

   else if(country == "India"){
    // let clearCountry = document.getElementById('option');
    // clearCountry.remove();
    for(let i=0 ; i < India.length; i++){
        console.log(i);
        let optionValuetwo = India[i];
        let elementTwo = document.createElement('option');
        elementTwo.value = optionValuetwo;
        console.log(elementTwo.value);
        elementTwo.innerHTML = India[i];
        let selectTwo = document.getElementById('city');
        selectTwo.appendChild(elementTwo);

    if(country != "Australia"){
        // let cityOptions = document.getElementById('city');
        // cityOptions.options.length = '';
        let cityOptions = document.getElementById('city');
        cityOptions.options.style.display = 'none';
      }  
    }
   }

}

function validateName(){ 
// var regex = new  RegExp("/^([^0-9]*)$/");
let getInputValue = document.getElementById('firstname').value;
if(getInputValue){
    document.getElementById('err-one').innerHTML="";
    document.getElementById('firstname').style.borderColor="";

     for(let i=0 ; i < getInputValue.length ; i++) {
        if((getInputValue[i]<'A'||getInputValue[i]>'Z') && (getInputValue[i]<'a'||getInputValue[i]>'z')){
            document.getElementById('err-one').innerHTML="Name should contain only characters";
            document.getElementById('firstname').style.borderColor="red"; 
        }
    }
    if((getInputValue.length > 24)  ) {
         document.getElementById('err-one').innerHTML="Name should be within 24 characters only";  
         document.getElementById('firstname').style.borderColor="red";
    }
}
else {
    let getPara = document.getElementById('err-one').innerHTML="Name cannot be empty";
    document.getElementById('firstname').style.borderColor="red";
} 
    }