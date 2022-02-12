//event handle with submit button
document.getElementById('login-submit').addEventListener('click', function (e) {
    //get user email
    const emailField = document.getElementById('mail-field');
    const userEmail = emailField.value;

    //get user password
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;

    if (userEmail == 'ajhar@gmail.com' && userPassword == 'ajhar') {
        window.location.href = 'banking.html';
    }

})