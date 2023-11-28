import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Avatar, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputText from '../../components/Forms/InputText';
import { authenticationRules } from '../../constants';
import { ModalWrapper } from './styled';
import { users } from '../../api/users/users';

function LoginFormModal() {
  const LOGIN_ERROR_MESSAGE = 'Wrong Email or Password!';

  const navigate = useNavigate();
  const [timerSecond, setTimerSecond] = useState(0);
  const [timerMinute, setTimerMinute] = useState(0);
  const [userIsLogin, setUserIsLogin] = useState(false);
  const [user, setUser] = useState({ email: '',password: '' });
  const {
    control,
    handleSubmit,
    reset,
    getValues,
  } = useForm();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeTimer = () => {
    setTimerSecond(timerSecond + 1);
    if (timerSecond >= 59) {
      setTimerMinute(timerMinute + 1);
      setTimerSecond(0);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(changeTimer, 1000);

    if (userIsLogin) clearTimeout(timerId);
    
  }, [changeTimer, timerSecond, userIsLogin]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function createNewUserObject() {
    const valuesFromForm = getValues();
    const updateUser = {
      email: valuesFromForm.email,
      password: valuesFromForm.password,
    };

      setUser(updateUser)
      console.log(updateUser);
      return updateUser;
  }
  
  const fetchController = useCallback(async (action) => {
    try {
      const usersData = await users.get(action);
      console.log(usersData);
      return usersData;
    } catch (err) {
      console.log(err);
    } 
  }, []);

  function showError(mssg) {
    alert(mssg);
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigate = (path) => {
    path ? navigate(`/${path}`) : navigate('/home/');
  };

  const loginUser = useCallback(async () => {
    const usersData = await fetchController('users');
    const currentUser = createNewUserObject();
    const user = usersData.find((user) => user.email.toLowerCase() === currentUser.email.toLowerCase());

    if (!user) {
      showError(LOGIN_ERROR_MESSAGE);
      return;
    }  
    if (user.password !== currentUser.password) {
      showError(LOGIN_ERROR_MESSAGE);
      return;
    }
  
    // const currentUserID = await fetchController(`users/${user.id}`);
    const token = user.token;
    localStorage.setItem('token', token);
    console.log(token);
   
    setUserIsLogin(true);
    setUser(user);
    reset();  
  }, [createNewUserObject, fetchController, reset]);

  return (
    <>
    <ModalWrapper>
      <Paper style={{ width: '450px', padding: '25px' }}> 
      {userIsLogin ? (
        <div style={{textAlign: 'center', }}>
         <Avatar style={{margin: '0 auto', scale: '1.75', marginBottom: '20px'}} alt="Profile Picture" src={user.avatar} />
          <h2> Hello {user.name}!</h2>
          <h2> Your login time {timerMinute} m : {timerSecond} s</h2>
          <div className='score-section'>
            <Button 
              component="label"
              variant="contained"
              className='button-quiz'
              onClick={handleSubmit(() => handleNavigate())}>Log Out
            </Button>
            <Button 
              component="label"
              variant="contained" 
              className='button-quiz'
              onClick={handleSubmit(() => handleNavigate())}>Home Page
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className='timer-text'>
            <h4 style={{ color: 'white' }}>TIMER {timerMinute}:{timerSecond}</h4>
          </div>
          <h2 style={{textAlign: 'center'}}>Log In</h2>
            <InputText
              fullWidth
              control={control}
              name='email'
              rules={authenticationRules.email}
              label='Email address'
            />
            <InputText
            fullWidth
            control={control}
            name='password'
            rules={authenticationRules.password}
            label='Password'
            type='password'
            />
            <div className='score-section'>
            <Button 
              component="label"
              variant="contained"
              className='button-quiz'
              onClick={handleSubmit(loginUser)}>Log In
            </Button>
            <Button 
              component="label"
              variant="contained" 
              className='button-quiz'
              onClick={handleSubmit(() => handleNavigate())}>Register
            </Button>
          </div>
        </div>
        )} 
      </Paper>
      </ModalWrapper>
    </>
  );
}

export default LoginFormModal;

