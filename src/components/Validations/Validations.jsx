export const validatePhoneNumber = (value) => {
    const phoneNumberRegex = /^[0-9]{10}$/; // Regex for 10-digit phone number
    if (!phoneNumberRegex.test(value)) {
        return 'Please enter a valid 10-digit phone number';
    }
    return true;
};

// Custom validation for email
export const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email format
    if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
    }
    return true;
};

// Custom validation for Text Input (only letters allowed)
export const validateText = (value) => {
    const textRegex = /^[A-Za-z\s]+$/; // Regex for letters and spaces
    if (!value.trim()) {
        return 'This field cannot be empty';
    }
    if (!textRegex.test(value)) {
        return 'Please enter a valid text (letters only)';
    }
    return true;
};


// Custom validation for Password Input
export const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // At least one letter, one number, one special character, min 8 chars
    if (!value.trim()) {
        return 'Password cannot be empty';
    }
    if (/\s/.test(value)) {
        return 'Password should not contain spaces';
    }
    if (!passwordRegex.test(value)) {
        return 'Password must be at least 8 characters long, include at least one letter, one number, and one special character';
    }
    return true;
};
