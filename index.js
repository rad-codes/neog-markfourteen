const initialcost=document.querySelector("#initial-price")
const quantity=document.querySelector("#stocks-quantity")
const currentprice=document.querySelector("#current-price")
const button=document.querySelector("#submit-btn")
const output=document.querySelector(".output")
function calculateprofitloss(initial,quantity,current){
   if(initial===current){
    showoutput( `Hey, Initial and current price is the same , so no profit or loss`);
   }
else if(current>initial){
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
  if(initialcost.value!=''&&quantity.value!=''&&currentprice.value!=''){
    if(initialcost.value>0&&quantity.value>0&&currentprice.value>=0){

    
    calculateprofitloss(initialcost.value,quantity.value,currentprice.value)
    }else{
      showoutput( `Enter cost and quantity greater than 0  current price greater than or equal to 0`);
    }
  }else{
    showoutput( `Enter value in all fields`);
  }
}
button.addEventListener("click",handleclick);