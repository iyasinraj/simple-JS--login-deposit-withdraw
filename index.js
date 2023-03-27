// login function

document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    if(email === 'admin' && password === 'admin'){
        location.href = 'bank.html';
    }
    else{
        alert('please enter valid information');
    }
});

