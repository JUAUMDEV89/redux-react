import { AuthState, AuthAction } from './types';

const initialState: AuthState = {
   loadingSigInRequest: false,
   isSignedIn: false, 
   error: false,
}

function auth(state = initialState, action: AuthAction): AuthState{
      switch (action.type) {
          case '@auth/SIGN_IN_REQUEST':
            return{
               ...state,
               loadingSigInRequest: true,
            };
            
            case '@auth/SIGN_IN_SUCCESS':
            return{
               ...state,
               loadingSigInRequest: false,
               isSignedIn: true,
            };

            case '@auth/SIGN_IN_FAILED':
            return{
               ...state,
               loadingSigInRequest: false,
               error: true,
            };

          default:
            return state
      }
}

export default auth;