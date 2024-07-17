export const login = () => {
  return {
    loggedIn: true,
    user: {},
  };
};

export const useSignIn = () => {
  const submit = () => {
    return login();
  };
  return { submit };
};
