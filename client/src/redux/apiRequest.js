import axios from "axios";                                             
import { loginFailed, loginStart, loginSuccess, logOutFailed, logOutStart, logOutSuccess } from "./authSlice";
import { registerFailed, registerStart, registerSuccess } from "./authSlice";
import { deleteUsersFailed, deleteUsersSuccess, deleteUsersStart, getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
      const res = await axios.post("/v1/auth/login", user);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
 }; 

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/v1/auth/register", user);
    dispatch(registerSuccess(res.data));
    navigate("/login");
  } catch (err) {
    dispatch(registerFailed());
  }
};

export const getAllUsers = async (accessToken, dispatch,axiosJWT) => {
    dispatch(getUsersStart());
    try {
      const res = await axiosJWT.get("/v1/user",{
        headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFailed()); 
    }
};
export const deleteUser = async (accessToken, dispatch, id, axiosJWT) => {
  dispatch(deleteUsersStart());
  try {
    const res = await axiosJWT.delete("/v1/user/" + id, { 
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteUsersSuccess(res.data)); 
  } catch (err) {
    dispatch(deleteUsersFailed(err.response.data));
  }
};
export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post("/v1/auth/logout", id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logOutSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
  }
}