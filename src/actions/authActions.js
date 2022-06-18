import * as api from "../api/index.js";

const login = async (userData) => {
  try {
    // todo: login user
    const data = await api.loginUser(userData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const signup = async (newUser) => {
  try {
    // todo: signup user
    const data = await api.signupUser(newUser);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { login, signup };
