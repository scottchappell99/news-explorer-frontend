const registerUser = ({ email, password, name }) => {
  return new Promise((res) => {
    res({
      data: {
        email: email,
        password: password,
        name: name,
      },
    });
  });
};

const logInUser = ({ email, password }) => {
  return new Promise((res) => {
    res({
      token: "a fake token",
      data: {
        email: email,
        password: password,
      },
    });
  });
};

const getUserInfo = (token) => {
  return new Promise((res) => {
    res({
      data: {
        token: token,
        name: "Scott",
        email: "fakeemail@email.com",
        id: "anid",
      },
    });
  });
};

export { registerUser, logInUser, getUserInfo };
