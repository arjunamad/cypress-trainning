// cypress/fixtures/credentials2.js
export const credentials2 = {
  loginPage: 'https://okidokiqa.overleap.lk/auth',  // Added login page URL
  valid: {
    email: "praveen.wanninayake@overleap.lk",
    password: "123456*+H",
  },
  invalid: {
    email: "praveen.wanninayake@overledfap.lk",
    password: "123456*+H",
  },
};
