// export two things - initial state, reducer function

export const initialState = {
  todoItems: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    default:
      return state;
  }
};
