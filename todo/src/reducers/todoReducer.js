// export two things - initial state, reducer function

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,

        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "TOGGLE":
      return state.map(task => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });

    default:
      return state;
  }
};
