document.getElementById('button-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    console.log(email, password);

    if (email === 'admin@gmail.com' && password === '123456') {
        console.log('Valid User');
    }
    else {
        console.log('Invalid User');
    }
})