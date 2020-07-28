const jobsReducer = (state, action) => {
  switch (action.type) {
    case "AddData":
      return [...state, action.payload];
    default:
      return state;
  }
};
