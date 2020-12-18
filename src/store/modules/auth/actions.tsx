import { action } from 'typesafe-actions';

export const signInRequest = ({ email, password }: { email: string, password: string })=>{
    return action('@auth/SIGN_IN_REQUEST',{
        email,
        password
    })
}

export const signInSuccess = ({ token }: { token: string })=>{
    return action('@auth/SIGN_IN_SUCCESS',{
        token,
    })
}

export const signInFailed = ()=>{
    return action('@auth/SIGN_IN_FAILED');
}


