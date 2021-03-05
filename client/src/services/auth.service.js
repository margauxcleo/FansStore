const API_URL = "http://localhost:8088/auth/";

const login = (userEmail, password) => {
  const body = { userEmail, password };
    const response = fetch(API_URL + 'signin', { 
        method : 'POST',
        mode : 'cors',
        headers : {
          'Content-Type' : 'application/json'
          },
        body : JSON.stringify(body)
      })
    .then(response => {
      // if (response.data.token) {
      //   localStorage.setItem("user", JSON.stringify(response.data));
      //   // setAuth(true);
      // } else {
      //   // setAuth(false);
      // }

      return response.data;
    });
}

const logout = () => {
  localStorage.removeItem("user");
}

const register = (firstNameReg, lastNameReg, emailReg, birthDateReg, passwordReg, phoneReg) => {
  const response = fetch(API_URL + 'signup', { 
      method : 'POST',
      mode : 'cors',
      first_name: firstNameReg,
      last_name: lastNameReg,
      email: emailReg,
      birth_date: birthDateReg,
      password: passwordReg,
      phone: phoneReg
  })
    // après son inscription, on génère le met en place le localstorage
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        // setAuth(true);
      } else {
        // setAuth(false);
      }

      return response.data;
  })
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
}

const AuthService = {
  login: login,
  logout: logout,
  register: register,
  getCurrentUser: getCurrentUser
};

export default AuthService;