document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const depositeAmount = depositeField.value;

    const currentDepositeTotal = document.getElementById('deposite-total');
    const currentDeposite = currentDepositeTotal.innerText;
    currentDepositeTotal.innerText = depositeAmount;

    console.log(depositeAmount);
})