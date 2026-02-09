// ==================== CONTACT FORM VALIDATION ====================
const initContactForm = () => {
    const form = document.querySelector('.box');
    if (!form) return;

    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageTextarea = form.querySelector('textarea');
    const submitBtn = form.querySelector('.send-btn');

    // Add IDs for better accessibility
    if (nameInput) nameInput.id = 'contact-name';
    if (emailInput) emailInput.id = 'contact-email';
    if (messageTextarea) messageTextarea.id = 'contact-message';

    // Create error message elements
    const createErrorElement = (input) => {
        const error = document.createElement('span');
        error.className = 'error-message';
        error.style.display = 'none';
        input.parentNode.insertBefore(error, input.nextSibling);
        return error;
    };

    const nameError = createErrorElement(nameInput);
    const emailError = createErrorElement(emailInput);
    const messageError = createErrorElement(messageTextarea);

    // Validation functions
    const validateName = () => {
        const value = nameInput.value.trim();
        if (value === '') {
            showError(nameInput, nameError, 'Please enter your name');
            return false;
        } else if (value.length < 2) {
            showError(nameInput, nameError, 'Name must be at least 2 characters');
            return false;
        } else {
            hideError(nameInput, nameError);
            return true;
        }
    };

    const validateEmail = () => {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === '') {
            showError(emailInput, emailError, 'Please enter your email');
            return false;
        } else if (!emailRegex.test(value)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        } else {
            hideError(emailInput, emailError);
            return true;
        }
    };

    const validateMessage = () => {
        const value = messageTextarea.value.trim();
        if (value === '') {
            showError(messageTextarea, messageError, 'Please enter your message');
            return false;
        } else if (value.length < 10) {
            showError(messageTextarea, messageError, 'Message must be at least 10 characters');
            return false;
        } else {
            hideError(messageTextarea, messageError);
            return true;
        }
    };

    const showError = (input, errorElement, message) => {
        input.classList.add('input-error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    };

    const hideError = (input, errorElement) => {
        input.classList.remove('input-error');
        errorElement.style.display = 'none';
    };

    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageTextarea.addEventListener('blur', validateMessage);

    // Input event for instant feedback
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('input-error')) {
            validateName();
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('input-error')) {
            validateEmail();
        }
    });

    messageTextarea.addEventListener('input', () => {
        if (messageTextarea.classList.contains('input-error')) {
            validateMessage();
        }
    });

    // Form submission
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isMessageValid) {
            // Show success message
            showSuccessMessage();

            // Reset form after 2 seconds
            setTimeout(() => {
                nameInput.value = '';
                emailInput.value = '';
                messageTextarea.value = '';
            }, 2000);
        } else {
            // Shake animation for submit button
            submitBtn.classList.add('shake');
            setTimeout(() => submitBtn.classList.remove('shake'), 500);
        }
    });

    const showSuccessMessage = () => {
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you! Your message has been sent successfully.</p>
        `;

        form.appendChild(successMsg);

        setTimeout(() => {
            successMsg.classList.add('show');
        }, 100);

        setTimeout(() => {
            successMsg.classList.remove('show');
            setTimeout(() => successMsg.remove(), 300);
        }, 3000);
    };
};

// Initialize contact form when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}
