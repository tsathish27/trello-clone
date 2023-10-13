import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';
import { moveTask } from './actions';

const Board = () => {
  const columns = useSelector((state) => state.columns);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      return;
    }

    dispatch(moveTask(source.droppableId, destination.droppableId, draggableId));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="columns"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {Object.keys(columns).map((columnId) => (
              <Column key={columnId} column={columns[columnId]} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
