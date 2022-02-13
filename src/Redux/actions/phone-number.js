import { postAxios } from "redux/api";
import toast from "react-hot-toast";

export const PhoneNumberActions = (params) => {
  return (dispatch) => {
    postAxios("api/change_phone", {...params}).then((res) => {
      dispatch({ type: "CHANGE_PHONE_NUMBER", payload: res.data, params });
    }).catch(err => {
        console.log(err)
        toast.error(err.message)
    })
  };
};
