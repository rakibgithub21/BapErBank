/* 
1.add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5- also make sure to convert the input into a number by using parsefloat
stpe-3: get previous withdraw total
step-4: calculate total withdraw amount
4.5: set total withdraw amount
step-5: get the previous balance total
step-6: calculate new balance total
6.5: set the new balance total
*/ 



//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmoutnString = withdrawField.value;
    // step2.5
    const newWithdrawAmoutn = parseFloat(newWithdrawAmoutnString);
    //step-3:
    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withDrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmoutn;
    withDrawTotalElement.innerText = currentWithdrawTotal;

    // step4.5


    //step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmoutn; 
    balanceTotalElement.innerText = newBalanceTotal;
    // set the new balance 
    //step-7:
    withdrawField.value = '';
    })
    
    
    
   
    
    
    
   
    

    

    
    
    

    
   
    
