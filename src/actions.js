// // actions.js
// export const ADD_TASK = 'ADD_TASK';
// export const MOVE_TASK = 'MOVE_TASK';

// export const addTask = (columnId, content) => ({
//   type: ADD_TASK,
//   payload: { columnId, content },
// });

// export const moveTask = (sourceColumn, destColumn, taskId) => ({
//   type: MOVE_TASK,
//   payload: { sourceColumn, destColumn, taskId },
// });

// Define your action types
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const MOVE_TASK = 'MOVE_TASK';

// Action creators
export const addTask = (columnId, content) => {
  return {
    type: ADD_TASK,
    payload: {
      columnId,
      content,
    },
  };
};

export const updateTask = (taskId, content) => {
  return {
    type: UPDATE_TASK,
    payload: {
      taskId,
      content,
    },
  };
};

export const moveTask = (sourceColumnId, destinationColumnId, taskId) => {
  return {
    type: MOVE_TASK,
    payload: {
      sourceColumnId,
      destinationColumnId,
      taskId,
    },
  };
};

