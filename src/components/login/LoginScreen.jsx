import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

const LoginScreen = () => 
{

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const login = ()=>
  {
    
    const action = {
      type: types.login,
      payload: {name: 'Nacho'}
    }

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/'

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className='coneinter mt-5'>
        <h1>Login</h1>
        <hr/>

        <button
          className='btn btn-primary'
          onClick={login}
        >
          Login
        </button>
    </div>
  )
}

export default LoginScreen