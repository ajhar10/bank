
function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const currentAmountText = inputField.value;
    const currentAmount = parseFloat(currentAmountText);
    inputField.value = '';
    return currentAmount;
}

//handling deposite button by listener
document.getElementById('deposite-button').addEventListener('click', function () {
    //get the new amount of deposite
    const currentDeposite = getInputValue('deposite-input');
    //get the previous amount of deposite
    const previousdepositTotal = document.getElementById('deposite-total');
    // console.log(depositTotal.innerText);
    const previousDepositeText = previousdepositTotal.innerText;
    const previousDeposite = parseFloat(previousDepositeText);
    //total deposite
    const totalDeposite = previousDeposite + currentDeposite;
    //set deposite 
    previousdepositTotal.innerText = totalDeposite;

    //update balanceTotal 
    const balanceField = document.getElementById('balance-total');
    const currentBalanceText = balanceField.innerText;
    const currentBalance = parseFloat(currentBalanceText);
    const totalBalance = currentBalance + currentDeposite;
    balanceField.innerText = totalBalance;

})

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get current deposite amount from input
    const currentWithdraw = getInputValue('withdraw-input');

    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawValue = parseFloat(previousWithdrawText);

    const totalWithdraw = previousWithdrawValue + currentWithdraw;
    previousWithdraw.innerText = totalWithdraw;

    const balanceField = document.getElementById('balance-total');
    const currentBalanceText = balanceField.innerText;
    const currentBalance = parseFloat(currentBalanceText);
    const newBalance = currentBalance - totalWithdraw;
    balanceField.innerText = newBalance;

})
