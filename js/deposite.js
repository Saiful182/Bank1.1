
document.getElementById('btn-deposite').addEventListener('click', function () {

    const newDepositeAmount = getInputValueById('deposite-field');
    const priviousDepositeAmount = getElementValueById('deposite-total');
    const newDepositeTotal = newDepositeAmount + priviousDepositeAmount;
    setTextElementValueById('deposite-total', newDepositeTotal);

    const PriviousTotalBalance = getElementValueById('total-balance');
    const newBalance = PriviousTotalBalance + newDepositeAmount;

    setTextElementValueById('total-balance', newBalance);

})