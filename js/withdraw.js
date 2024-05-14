document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmountElement = document.getElementById('new-withdraw');
    const newWithdrawAmountString = newWithdrawAmountElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    if (isNaN(newWithdrawAmount)) {
        newWithdrawAmountElement.value = '';
        alert('Please Enter a valid Number');
    }
    else {
        const previousBalanceElement = document.getElementById('total-balance');
        const previousBalanceString = previousBalanceElement.innerText;
        const previousBalance = parseFloat(previousBalanceString);

        if (newWithdrawAmount > previousBalance) {
            newWithdrawAmountElement.value = '';
            alert("Insuffecient Balance");
        }
        else {
            const previousWithdrawElement = document.getElementById('withdraw-total');
            const previousWithdrawString = previousWithdrawElement.innerText;
            const previousWithdraw = parseFloat(previousWithdrawString);

            const totalWithdraw = previousWithdraw + newWithdrawAmount;

            previousWithdrawElement.innerText = totalWithdraw;


            const newTotalBalce = previousBalance - newWithdrawAmount;
            previousBalanceElement.innerText = newTotalBalce;
            newWithdrawAmountElement.value = '';

        }



    }




})