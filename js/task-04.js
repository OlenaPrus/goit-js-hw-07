    const form = document.querySelector('.login-form');
    const userEmail = document.querySelector('[name="email"]');
    const userPassword = document.querySelector('[name="password"]');

    const handleSubmit = event => { 
      event.preventDefault();
    const user = {};
    const editEmail = userEmail.value.trim();
    const editPassword = userPassword.value.trim();

    if (!editEmail || !editPassword) 
    return alert('All form fields must be filled in');
    else {
        user.email = editEmail;
        user.password = editPassword;
        console.log(user);
    }
    event.target.reset();
};

form.addEventListener('submit', handleSubmit);