const display=document.querySelector(".calculator-input");
const keys=document.querySelector(".calculator-keys")

let firstValue=null;
let operator=null;
let displayValue="0";
let waitingForSecondValue=false;
updateDisplay();

function updateDisplay()
{
  display.value=displayValue;
}
keys.addEventListener("click",function(e){
    const element=e.target;
   
    if(!element.matches("button"))
    {
        return;
    }
    if(element.classList.contains("operator"))
    {
        hadleOperator(element.value);
        updateDisplay();
        return;
    }
    if(element.classList.contains("clear"))
    {
        clear();
        updateDisplay();
      
       return;
    }
    if(element.classList.contains("decimal"))
    {
        
        inputDecimal(element.value);
        updateDisplay();
       return;
    }
inputNumber(element.value);
updateDisplay();

});

function hadleOperator(Nextoperator)
{
 const value=parseFloat(displayValue);
if(operator&&waitingForSecondValue)
{
 operator=Nextoperator;
 return;
}
 if(firstValue===null)
 {
     firstValue=value;
 }
 else if(operator)
 {
    const result=calculate(firstValue,value,operator);
    //displayValue="${parseFloat(result.toFixed(7))}";
    displayValue=String(result);
  
    firstValue=result;
 }
 waitingForSecondValue=true;
 operator=Nextoperator;
}

function calculate(first,second,operator)
{
  if(operator==="+")
  {
     return first+second;
  }
  else if(operator==="-")
  {
     return first-second;
  }
  else if(operator==="*")
  {
     return first*second;
  }
  else if(operator==="/")
  {
     return first/second;
  }
return second;
}
function inputNumber(num){

    if(waitingForSecondValue==true)
    {
      displayValue=num;
      waitingForSecondValue=false;
    }
    else
    {
        displayValue=displayValue==='0'? num:displayValue + num;
    }
   
}

function inputDecimal()
{
    if(!displayValue.includes("."))
    displayValue+=".";
}
function clear()
{
   displayValue="0";
}