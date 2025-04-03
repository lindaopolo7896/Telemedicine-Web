// Hamburger Menu
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });
}

// Contact Form Validation
const forms = document.querySelectorAll('.contactForm');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('.contactName');
        const email = form.querySelector('.contactEmail');
        const message = form.querySelector('.contactMessage');
        const phone = form.querySelector('.contactPhone');
        const query= form.querySelector('.query');
        const nameError = form.querySelector('.nameError');
        const emailError = form.querySelector('.emailError');
        const messageError = form.querySelector('.messageError');
        const phoneError = form.querySelector('.phoneError');
        const queryError = form.querySelector('.queryError');

        if (!name.value) nameError.textContent = 'Please enter your name';
        else nameError.textContent = '';

        if (!email.value) emailError.textContent = 'Please enter your email';
        else emailError.textContent = '';

        if (!message.value) messageError.textContent = 'Please enter your message';
        else messageError.textContent = '';

        if (!phone.value) phoneError.textContent = 'Please enter your phone number';
        else phoneError.textContent = '';

    

        if (name.value && email.value && message.value && phone.value ) {
            console.log('Message sent successfully');
            alert('Message sent successfully');
            form.reset();
            }
        });
    });

// Login Form Validation

const loginForm = document.querySelector('.ppl-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('.ppl-email');
        const password = loginForm.querySelector('.password');
        const emailError = loginForm.querySelector('.email-error');
        const passwordError = loginForm.querySelector('.password-error');

        if (!email.value) emailError.textContent = 'Please enter your email';
        else emailError.textContent = '';

        if (!password.value) passwordError.textContent = 'Please enter your password';
        else passwordError.textContent = '';

        if (email.value && password.value) {
            console.log('Login successful');
            alert('Login successful');
            loginForm.reset();
        }
    });
}


const password = document.querySelector('.password');
const showPassword = document.querySelector('.show');

if (showPassword) {
    showPassword.addEventListener('click', () => {
        if (password.type === 'password') {
            password.type = 'text';
            showPassword.textContent = 'Hide Password';
            showPassword.style.color = 'white';
            showPassword.style.cursor = 'pointer';
        
        } else {
            password.type = 'password';
            showPassword.textContent = 'Show Password';
        }
    });
}