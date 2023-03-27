// deposit function
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmountInput = document.getElementById('deposti-input');
    const depositAmount = depositAmountInput.value;
    const depositValue = parseFloat(depositAmount);

    depositAmountInput.value = ' ';

    if(isNaN(depositValue)){
        alert('please insert amount');
        return;
    }

    const oldDeposit = document.getElementById('total-deposit');
    const oldDepositString = oldDeposit.innerText;
    const oldDepositValue = parseFloat(oldDepositString);

    const totalDeposit = oldDepositValue + depositValue;
    oldDeposit.innerText = totalDeposit;


    const oldBalanceString = document.getElementById('total-available');
    const oldBalanceValue = oldBalanceString.innerText;
    const oldBalance = parseFloat(oldBalanceValue);
    const newBalance = totalDeposit + oldBalance;
    oldBalanceString.innerText = newBalance;
});





// // withdraw function

    document.getElementById('withdraw-btn').addEventListener('click', function(){
        // withdraw input area
        const withdrawAmountInput = document.getElementById('withdraw-input');
        const withdrawAmount = withdrawAmountInput.value;
        const withdrawValue = parseFloat(withdrawAmount);
  
        // clear input data
        withdrawAmountInput.value = ' ';

        if(isNaN(withdrawValue)){
            alert('please insert amount');
            return;
        }
        // total withdraw result area
        const oldWithdraw = document.getElementById('total-withdraw');
        const oldWithdrawString = oldWithdraw.innerText;
        const oldWithdrawValue = parseFloat(oldWithdrawString);
        
      
        
        // update available balance area part 1
        const oldBalanceString = document.getElementById('total-available');
        const oldBalanceValue = oldBalanceString.innerText;
        const oldBalance = parseFloat(oldBalanceValue);
        


        // validation for withdraw amount
        if(withdrawValue > oldBalance){
           alert('please insert valid amount');
           return;
        }

          // add old withdraw and new withdraw
        const totalWithdraw = oldWithdrawValue + withdrawValue;
        oldWithdraw.innerText = totalWithdraw;
       

        // update available balance area part 2
        const newBalance = oldBalance - totalWithdraw;
        oldBalanceString.innerText = newBalance;


});





