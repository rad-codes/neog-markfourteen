const initialcost=document.querySelector("#initial-price")
const quantity=document.querySelector("#stocks-quantity")
const currentprice=document.querySelector("#current-price")
const button=document.querySelector("#submit-btn")
const output=document.querySelector(".output")
function calculateprofitloss(initial,quantity,current){
   
if(current>initial){
 const profitamt=(current-initial)*quantity;
 const profitpercent=(profitamt/initial)*100
 showoutput( `Hey, the profit is ${profitamt} and the percent is ${profitpercent}%`);
}
else{
    const lossamt=(initial-current)*quantity;
    const losspercent=(lossamt/initial)*100
      showoutput( `Hey, the loss is ${lossamt} and the percent is ${losspercent}%`);
}
}
function showoutput(message) {
    output.innerHTML = message;
  }
function handleclick(){
    calculateprofitloss(initialcost.value,quantity.value,currentprice.value)
}
button.addEventListener("click",handleclick);