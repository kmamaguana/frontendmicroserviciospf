const URLAPI = process.env.REACT_APP_URL_API;


export const LoginAPI = `${URLAPI}/auth/login`;
export const RegisterAPI = `${URLAPI}/auth/register`;
export const ForgotPasswordAPI = `${URLAPI}/auth/forgot-password`;
export const ResetPasswordAPI = `${URLAPI}/auth/reset-password`;
