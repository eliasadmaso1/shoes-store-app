export  function sumNumbers(num1,num2){
    if(!Number(num1) || !Number(num2)) return "not a number"
    return num1+num2;
}

export  function subNumbers(num1,num2){
    if(!Number(num1) || !Number(num2)) return "not a number"
    return num1-num2;
}

export  function multNumbers(num1,num2){
    
    if(!Number(num1) || !Number(num2)) return "not a number"
    return num1*num2;
}

export  function divisionNumbers(num1,num2){
    if(!Number(num1) || !Number(num2)) return "not a number";
    if(num1 < num2 ) return "not a full number";
    return num1/num2 || num2/num1;
}



