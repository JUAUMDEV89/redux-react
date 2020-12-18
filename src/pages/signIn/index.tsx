import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

const SignIn = ()=>{

    const { loadingSigInRequest } = useSelector((state: StoreState) => state.auth);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Login</h1>
            <label>
            Email:
            <input type="email" />
            </label>
            <label>
            Password:
            <input type="password" />
            </label>
            <button onClick={()=>{ dispatch(signInRequest({ email: 'test@gmail.com', password: '12345678' })); }}>{loadingSigInRequest ? 'Loading' : 'Entrar'}</button>
      </div>
    )
}

export default SignIn;