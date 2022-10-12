const userToken = state => state.user.token;

const userEmail = state => state.user.email;

const errorMessage = state => state.error;

export { userToken, userEmail, errorMessage };
