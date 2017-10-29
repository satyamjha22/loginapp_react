export const USER_NAME = 'username';
export const PASSWORD = 'password';
export const LOGIN = 'login';


export function username(value) {
  console.log(value, 'value');
  return {
    type: USER_NAME,
    payload: {
      value
    }
  };
}
export function password(value) {
  console.log(value, 'value');
  return {
    type: PASSWORD,
    payload: {
      value
    }
  };
}

export function login(value1, value2) {
  
    console.log(value1, value2, 'values');
   return (dispatch, getState) => {
     const state  = getState();
     const loginData = state.login;
     console.log(loginData, 'loginData');
     let validation = loginData.dataValidation;
     let errorPopup = loginData.errorPopup;
     console.log(loginData.username[0],'jhdhfh', value1);
      if(value1 === loginData.username[0] && value2 === loginData.password[0]){
          // alert('login')
          validation = true;
          
      }else{
        alert('Invalid ID or password. Please try again.');
        errorPopup = true;
      }
  dispatch({
    type: LOGIN,
    payload: {
      validation
    }
  });
}
}

