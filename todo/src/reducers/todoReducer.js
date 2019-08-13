// export two things - initial state, reducer function

export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "Add_Task":
      return {
        ...state,
        item: action.payload,
        completed: false,
        id: Date.now()
      };
    default:
      return state;
  }
};
