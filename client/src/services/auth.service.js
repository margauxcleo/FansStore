const API_URL = "http://localhost:8088/auth/";

const AuthService = (props) => {
  const login = (userEmail, password) => {
      const response = fetch(API_URL + 'signin', { 
          email: userEmail, 
          password: password
        })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          setAuth(true);
        } else {
          setAuth(false);
        }

        return response.data;
      });
  }

  const logout = () => {
    localStorage.removeItem("user");
  }

  const register = (firstNameReg, lastNameReg, emailReg, birthDateReg, passwordReg, phoneReg) => {
    const response = fetch(API_URL + 'signup', { 
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
          setAuth(true);
        } else {
          setAuth(false);
        }

        return response.data;
    })
  }

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default AuthService;