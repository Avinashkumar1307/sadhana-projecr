import { loginSuccess, logoutUserSuccess } from './reducer';
import axios from "axios";

export const loginUser = (formData ) => async (dispatch ) => {
  console.log(formData);
  try {
    var response = await axios.post("http://localhost:4000/api/v1/login", formData);
    console.log("console.log(response.data);",response.data);
    console.log(response.data);
    dispatch(loginSuccess(response.data));
      
  } catch (error ) {
    console.log(error);
    // dispatch(apiError(error));
    
    console.log(error)
  }
};


export const logoutUser = () => async (dispatch ) => {
  try {
    sessionStorage.removeItem("authUser");
    
      dispatch(logoutUserSuccess(true));
  } catch (error ) {
    // dispatch(apiError(error));
    console.log(error)
  }
};

