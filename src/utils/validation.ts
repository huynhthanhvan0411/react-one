// Check if the email is valid
export const validateEmail = (email:string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Check if the password is valid
export const validatePassword = (password:string) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+<>?]).{8,}$/;
  return passwordRegex.test(password);
};
