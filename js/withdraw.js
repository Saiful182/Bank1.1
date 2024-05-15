document.getElementById('btn-withdraw').addEventListener('click', function () {

    const priviousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdraw = getInputValueById('new-withdraw');
    const newWithdrawTotal = priviousWithdrawTotal + newWithdraw;

    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const priviousTotalBalance = getElementValueById('total-balance');
    const newTotalBalnce = priviousTotalBalance - newWithdraw;

    setTextElementValueById('total-balance', newTotalBalnce);
})