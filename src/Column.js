// // Column.js
// import React from 'react';
// import Task from './Task';
// import { Droppable } from 'react-beautiful-dnd';

// const Column = ({ column, tasks }) => {
//   return (
//     <div className="column">
//       <h2>{column.title}</h2>
//       <Droppable droppableId={column.id}>
//         {(provided) => (
//           <div
//             className="task-list"
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//           >
//             {tasks.map((task, index) => (
//               <Task key={task.id} task={task} index={index} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// };

// export default Column;
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ column }) => {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {column.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;

