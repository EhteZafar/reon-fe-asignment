import { dataConstants } from "../constants/dataConstant";

const initialState = {
  data: [],
  meta: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataConstants.SET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case dataConstants.SET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        meta: action.payload.meta,
      };
    case dataConstants.SET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
