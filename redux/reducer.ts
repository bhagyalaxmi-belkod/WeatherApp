const initialState = {
  country: {},
  weather: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return { ...state, country: action.data.data[0] };
      break;

    case "SET_WEATHER":
      return { ...state, weather: action.data };

    default:
      return state;
      break;
  }
};

export default reducer;
