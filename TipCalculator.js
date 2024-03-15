let billamount=document.getElementById("billamount");
let PERCENTAGEtip=document.getElementById("PERCENTAGEtip");
let tipamount=document.getElementById("tipamount");
let totalamount=document.getElementById("totalamount");
let errormessage=document.getElementById("errormessage");
let error="please enter a valid input";

function buttonElement(){
    let billamountvalue=billamount.value; 
    let PERCENTAGEtipvalue=PERCENTAGEtip.value;
    if (billamountvalue===""){
        errormessage.textContent=error;
    }
    else if ( PERCENTAGEtipvalue==="") {
        errormessage.textContent=error;
    }
    else{
        let billamount=parseInt(billamountvalue);
        let PERCENTAGEtip=parseInt(PERCENTAGEtipvalue);
        
        let calculateTip=(PERCENTAGEtip/100)*billamount;
        let calucatetotal=calculateTip+billamount;
        
        tipamount.value=calculateTip;
        totalamount.value=calucatetotal;
    }
}