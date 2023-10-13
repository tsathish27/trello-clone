// // reducers.js
// import { ADD_TASK, UPDATE_TASK, MOVE_TASK } from './actions';

// const initialState = {
//   columns: {
//     // Define your initial columns and tasks here
//     column1: {
//       id: 'column1',
//       title: 'To Do',
//       tasks: [
//         { id: 'task1', content: 'Task 1' },
//         { id: 'task2', content: 'Task 2' },
//       ],
//     },
//     column2: {
//       id: 'column2',
//       title: 'Doing',
//       tasks: [
//         { id: 'task3', content: 'Task 3' },
//       ],
//     },
//     column3: {
//       id: 'column3',
//       title: 'Done',
//       tasks: [
//         { id: 'task4', content: 'Task 4' },
//       ],
//     },
//   },
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       const { columnId, content } = action.payload;
//       return {
//         ...state,
//         columns: {
//           ...state.columns,
//           [columnId]: {
//             ...state.columns[columnId],
//             tasks: [
//               ...state.columns[columnId].tasks,
//               { id: Date.now().toString(), content },
//             ],
//           },
//         },
//       };

//     case UPDATE_TASK:
//       const { taskId, content: newContent } = action.payload;
//       const updatedState = { ...state };
//       for (const columnId in updatedState.columns) {
//         updatedState.columns[columnId].tasks = updatedState.columns[columnId].tasks.map((task) =>
//           task.id === taskId ? { ...task, content: newContent } : task
//         );
//       }
//       return updatedState;

//     case MOVE_TASK:
//       const { sourceColumnId, destinationColumnId, draggableId } = action.payload;
//       const taskToMove = state.columns[sourceColumnId].tasks.find((task) => task.id === draggableId);
//       if (!taskToMove) {
//         return state;
//       }

//       return {
//         ...state,
//         columns: {
//           ...state.columns,
//           [sourceColumnId]: {
//             ...state.columns[sourceColumnId],
//             tasks: state.columns[sourceColumnId].tasks.filter((task) => task.id !== draggableId),
//           },
//           [destinationColumnId]: {
//             ...state.columns[destinationColumnId],
//             tasks: [
//               ...state.columns[destinationColumnId].tasks,
//               { ...taskToMove },
//             ],
//           },
//         },
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
// reducers.js

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const MOVE_TASK = 'MOVE_TASK';

const initialState = {
  columns: {
    // Define your initial columns and tasks here
    column1: {
      id: 'column1',
      title: 'To Do',
      tasks: [
        { id: 'task1', content: 'Setup Redux Toolkit' },
        { id: 'task2', content: 'Implement Landing Page' },
      ],
    },
    column2: {
      id: 'column2',
      title: 'Doing',
      tasks: [
        { id: 'task3', content: 'Setup Material  UI' },
      ],
    },
    column3: {
      id: 'column3',
      title: 'Done',
      tasks: [
        { id: 'task4', content: 'Initialize React Project' },
        { id: 'task5', content: 'Initialize React Project' },
        { id: 'task6', content: 'Initialize React Project' },
        
      ],
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { columnId, content } = action.payload;
      // Handle adding a new task
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            tasks: [
              ...state.columns[columnId].tasks,
              { id: Date.now().toString(), content },
            ],
          },
        },
      };
      // Save the updated state to localStorage
      localStorage.setItem('appState', JSON.stringify(newState));
      return newState;

    case UPDATE_TASK:
      const { taskId, content: newContent } = action.payload;
      const updatedState = { ...state };
      for (const columnId in updatedState.columns) {
        updatedState.columns[columnId].tasks = updatedState.columns[columnId].tasks.map((task) =>
          task.id === taskId ? { ...task, content: newContent } : task
        );
      }
      // Save the updated state to localStorage
      localStorage.setItem('appState', JSON.stringify(updatedState));
      return updatedState;

    case MOVE_TASK:
      const { sourceColumnId, destinationColumnId, draggableId } = action.payload;
      const taskToMove = state.columns[sourceColumnId].tasks.find(
        (task) => task.id === draggableId
      );
      if (!taskToMove) {
        return state;
      }
      // Handle moving a task from sourceColumn to destColumn
      const newStateAfterMove = {
        ...state,
        columns: {
          ...state.columns,
          [sourceColumnId]: {
            ...state.columns[sourceColumnId],
            tasks: state.columns[sourceColumnId].tasks.filter(
              (task) => task.id !== draggableId
            ),
          },
          [destinationColumnId]: {
            ...state.columns[destinationColumnId],
            tasks: [...state.columns[destinationColumnId].tasks, { ...taskToMove }],
          },
        },
      };
      // Save the updated state to localStorage
      localStorage.setItem('appState', JSON.stringify(newStateAfterMove));
      return newStateAfterMove;

    default:
      return state;
  }
};

export default reducer;
