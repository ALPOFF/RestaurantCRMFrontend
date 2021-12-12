const SET_LOADING = "main/SET_LOADING";

let initialState = {
  loading: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading,
  };
};

export default mainReducer;
