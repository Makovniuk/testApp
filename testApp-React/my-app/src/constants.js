const ruleTexts = {
  required: 'Field is required',
  minLength: (length) => `Field should have more than ${length} characters`,
  maxLength: (length) => `Field should have less than ${length} characters`,
  validEmail: 'Please enter a valid email address',
  validPassword: 'Password must be at least 8 characters long and contain at least one uppercase letter and one digit',
};

export const authenticationRules = {
  email: {
    required: { value: true, message: ruleTexts.required },
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      message: ruleTexts.validEmail,
    },
  },
  password: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 8, message: ruleTexts.minLength(8) },
    maxLength: { value: 30, message: ruleTexts.maxLength(30) },
    pattern: {
      value: /^(?=.*[A-Z])(?=.*\d)/,
      message: ruleTexts.validPassword,
    },
  },
};
