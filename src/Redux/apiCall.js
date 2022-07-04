import { publicRequest } from "../axiosRequest";
import { loginFailure, loginStart, loginSuccess } from "./UserSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
 
  } catch (error) {
    dispatch(loginFailure());
  }
};
