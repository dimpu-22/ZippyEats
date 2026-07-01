export const validateRegister = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Full Name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    errors.phone = "Enter a valid 10-digit phone number";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};