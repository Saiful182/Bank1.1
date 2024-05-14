document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    const depositeTotalElement = document.getElementById('deposite-total');
    const PreviousDepositeString = depositeTotalElement.innerText;
    const PreviousDeposite = parseFloat(PreviousDepositeString);
    const curentDepositeTotal = PreviousDeposite + newDepositeAmount;

    depositeTotalElement.innerText = curentDepositeTotal;
    const previousBalanceElement = document.getElementById('total-balance');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const newTotalBalce = previousBalance + curentDepositeTotal;
    previousBalanceElement.innerText = newTotalBalce;


    depositeField.value = '';
})