let showResult=document.getElementById("ShowResult");

const clearAllInfo=()=>{
 showResult.value="";
}

const calculating=(newValue)=>{
   showResult.value+=newValue
}

const finalAnswer=()=>{
  let allInputValue=showResult.value;
  let calculateMethod=eval(allInputValue);
  showResult.value=calculateMethod;
}