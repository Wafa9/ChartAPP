import {
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    CLEAR_AUTH_STATE,
  } from '../../../constants/actionType';
  import axiosInstance from '../../../helpers/axiosInterceptor';
  
  export const clearAuthState = () => (dispatch) => {
    dispatch({
      type: CLEAR_AUTH_STATE,
    });
  };
  
  export default ({
    email,
    username,
    password,
  }) => (dispatch) => (onSuccess) => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axiosInstance
      .post('auth/register/', {
        email,
        username,
        password,
        
      })
      .then((res) => {
        console.log("called")
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
  
        onSuccess(res.data);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again'},
        });
      });
  };