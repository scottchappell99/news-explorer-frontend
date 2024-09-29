const registerUser = ({ email, password, name }) => {
  return new Promise((res, rej) => {
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
  return new Promise((res, rej) => {
    res({
      token: "a fake token",
    });
  });
};

const getUserInfo = (token) => {
  return new Promise((res, rej) => {
    res({
      data: {
        name: "Scott",
        email: "fakeemail@email.com",
        id: "anid",
      },
    });
  });
};

export { registerUser, logInUser, getUserInfo };
