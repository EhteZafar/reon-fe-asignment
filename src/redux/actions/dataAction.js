import { dataConstants } from "../constants/dataConstant";

export const setDataRequest = (data) => ({
  type: dataConstants.SET_DATA_REQUEST,
  payload: data,
});

export const setDataSuccess = (data) => ({
  type: dataConstants.SET_DATA_SUCCESS,
  payload: data,
});

export const setDataFailure = (error) => ({
  type: dataConstants.SET_DATA_FAILURE,
  payload: error,
});
