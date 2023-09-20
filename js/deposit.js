//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    //for input field use.value to get the value inside the input field
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositAmountString);
   
    //step-3:get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    //for non input use inner text to get the text
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);
    //step-4:add numbers to set the total deposit
    const currentDepositTotal = previusDepositTotal + NewDepositAmount;
    //set the deposit total
    depositTotalElement.innerText =currentDepositTotal; 
    
    //step-5:get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const previusBalanceTotal = parseFloat(previusBalanceTotalString);

    //step-6: calculate current total balance
    const currentBalanceTota = previusBalanceTotal + NewDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTota;
    //step-7: clear the deposit field
    depositField.value = '';

})



































