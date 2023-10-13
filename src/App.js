// import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { addTask, moveTask } from './actions';
// import { Provider } from 'react-redux';
// import store from './store';
// import React, { useState, useEffect } from 'react';
// function App() {
   

//   const columns = useSelector((state) => state.columns);
//   const dispatch = useDispatch();

//   const handleDragEnd = (result) => {
//     const { source, destination, draggableId } = result;

//     if (!destination) {
//       return;
//     }

//     if (source.droppableId === destination.droppableId) {
//       return;
//     }

//     dispatch(moveTask(source.droppableId, destination.droppableId, draggableId));
//   };

//   const handleAddTask = (columnId, content) => {
//     dispatch(addTask(columnId, content));
//   };

//   useEffect(() => {
//     localStorage.setItem('appState', JSON.stringify(store.getState()));
//   }, [store.getState()]);
//   const savedState = localStorage.getItem('appState');
//   const initialState = savedState ? JSON.parse(savedState) : store.getState();

 
//   const [showFeatures, setShowFeatures] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
  

//   // Define the toggleFeatures function
//   const toggleFeatures = () => {
//     setShowFeatures(!showFeatures);
//   };

//   // Define the togglePopup function
//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };
//   const openPopup = () => {
//     togglePopup();
//   };


//   const [selectedTask, setSelectedTask] = useState(null);
  
  

//   const handleTaskClick = (taskId) => {
//     const task = columns.column1.tasks.find((task) => task.id === taskId);
//     setSelectedTask(task);
//     togglePopup();
//   };
  



//   return (
//     <Provider store={store}>
//       <div className="App">
//         <header className="header">
//           <div className="logo">
//             <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Trello Logo" />
//             <span>Trello</span>
//           </div>
//           <nav className="nav">
//             <ul>
//               <li>
//                 <a href="#features" onClick={toggleFeatures}>
//                   Features<i className="fas fa-angle-down"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="#solutions">Solutions<i className="fas fa-angle-down"></i></a>
//               </li>
//               <li>
//                 <a href="#plans">Plans<i className="fas fa-angle-down"></i></a>
//               </li>
//               <li>
//                 <a href="#plans">Pricing</a>
//               </li>
//               <li>
//                 <a href="#resources" onClick={toggleFeatures}>
//                   Resources<i className="fas fa-angle-down"></i>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//           <div className="cta">
//             <a className="login-button">Login</a>
//             <button className="get-trello-button">Get Trello for Free</button>
//           </div>
//         </header>

//         <div className="header-like-div">
//           <span className="header-title">FE-ASSIGNMENT</span>
//           <i className="earth-icon fas fa-globe" id="earth"></i>
//           <span className="board-link">Board</span>
          
    

//           <div className="down-arrow" onClick={openPopup}>
//             <i className="fas fa-chevron-down" ></i>
// {/* 
//             <span className="filters-link">Filters <i class="fa-solid fa-arrow-up-wide-short"></i></span>
//           <span className="profile-link">Profile</span><i className="menu-icon fas fa-ellipsis-v"></i> */}
//           </div>
         
//         </div>
// {/* 
//         <DragDropContext onDragEnd={handleDragEnd}>
//           <div className="columns">
//             {Object.keys(columns).map((columnId) => {
//               const column = columns[columnId];
//               const isAddTaskAllowed = columnId === 'column1'; // Allow adding tasks only in the 'To Do' column
//               return (
//                 <div key={columnId} className="column">
//                   <h2>{column.title}</h2>
//                   <Droppable droppableId={columnId}>
//                     {(provided) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.droppableProps}
//                         className="tasks"
//                       >
//                         {column.tasks.map((task, index) => (
//                           <Draggable
//                             key={task.id}
//                             draggableId={task.id}
//                             index={index}
//                           >
//                             {(provided) => (
//                               <div
//                                 ref={provided.innerRef}
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                                 className="task"  onClick={openPopup}
//                               >
//                                 {task.content}
//                               </div>
//                             )}
//                           </Draggable>
//                         ))}
//                       </div>
//                     )}
//                   </Droppable>
//                   {isAddTaskAllowed && (
//                     <div className="add-task">
//                       <input
//                         type="text"
//                         placeholder="Add a task"
//                         onKeyPress={(e) => {
//                           if (e.key === 'Enter') {
//                             handleAddTask(columnId, e.target.value);
//                             e.target.value = '';
//                           }
//                         }}
//                       />
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

          
//         </DragDropContext>
//       </div>
//     </Provider>
//   );

  
// } */}
 
//         <DragDropContext onDragEnd={handleDragEnd}>
//           <div className="columns">
//             {Object.keys(columns).map((columnId) => {
//               const column = columns[columnId];
//               const isAddTaskAllowed = columnId === 'column1';
//               return (
//                 <div key={columnId} className="column">
//                   <h2>{column.title}</h2>
//                   <Droppable droppableId={columnId}>
//                     {(provided) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.droppableProps}
//                         className="tasks"
//                       >
//                         {column.tasks.map((task, index) => (
//                           <Draggable
//                             key={task.id}
//                             draggableId={task.id}
//                             index={index}
//                           >
//                             {(provided) => (
//                               <div
//                                 ref={provided.innerRef}
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                                 className="task"
//                                 onClick={() => handleTaskClick(task.id)}
//                               >
//                                 {task.content}
//                               </div>
//                             )}
//                           </Draggable>
//                         ))}
//                       </div>
//                     )}
//                   </Droppable>
//                   {isAddTaskAllowed && (
//                     <div className="add-task">
//                       <input
//                         type="text"
//                         placeholder="Add a task"
//                         onKeyPress={(e) => {
//                           if (e.key === 'Enter') {
//                             handleAddTask(columnId, e.target.value);
//                             e.target.value = '';
//                           }
//                         }}
//                       />
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//           {showPopup && selectedTask && (
//             <div className="popupp">
//               <h3 className="popupp-title">
//                 Task Details <i className="fa-solid fa-xmark"></i>
//               </h3>
//               <div>
//                 <strong>Task:</strong> {selectedTask.content}
//               </div>
//               <div>
//                 <strong>Status:</strong> {selectedTask.status}
//               </div>
//               <div>
//                 <strong>Description:</strong> {selectedTask.description}
//               </div>
//               <div>
//                 <strong>Actions:</strong>
//                 <button>Share</button>
//                 <button>Edit</button>
//                 <button>Delete</button>
//               </div>
//             </div>
//           )}
//         </DragDropContext>
//         {showPopup && (
//           <div className="popup">
//             <h3 className="popup-title"> upgrade your views <i class="fa-solid fa-xmark"></i></h3>
//             <ul>
//               <li><i class="fa-regular fa-square-check" id='popp'></i>Board</li>
//               <li><i class="fa-regular fa-square-check " id='popp'></i>Table<i class="fa-solid fa-lock"id='poppp'></i></li>
//               <li><i class="fa-regular fa-square-check"id='popp'></i>Calendar<i class="fa-solid fa-lock"id='poppp'></i></li>
//               <li><i class="fa-regular fa-square-check"id='popp'></i>Timeline<i class="fa-solid fa-lock"id='poppp'></i></li>
//               <li><i class="fa-regular fa-square-check"id='popp'></i>Dashboard<i class="fa-solid fa-lock"id='poppp'></i></li>
//               <li><i class="fa-regular fa-square-check"id='popp'></i>Map<i class="fa-solid fa-lock"id='poppp'></i></li>
//             </ul>
//             <h3 className="text1">See your work in new ways</h3>
//             <p>
//             View key timelines, assignments, data,<br></br>and more directly from your
//             Trello board <br></br>with Trello Premium.
//           </p>
//           <a href="https://">Learn more about Trello Premium</a>
//           </div>
          
//         )}
//       </div>
//     </Provider>
//   );
// }

// export default App;

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { addTask, moveTask } from './actions';
import { Provider } from 'react-redux';
import store from './store';
import React, { useState, useEffect } from 'react';

function App() {
  // Get columns and dispatch function from Redux store
  const columns = useSelector((state) => state.columns);
  const dispatch = useDispatch();

  // Define a function to handle drag-and-drop task movement
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

  // Define a function to add a new task to a column
  const handleAddTask = (columnId, content) => {
    dispatch(addTask(columnId, content));
  };

  // Save and retrieve state from local storage (you might need to adjust this part)
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(store.getState()));
  }, [store.getState()]);

  const savedState = localStorage.getItem('appState');
  const initialState = savedState ? JSON.parse(savedState) : store.getState();

  // Define state for showing/hiding features and popups
  const [showFeatures, setShowFeatures] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupp, setShowPopupp] = useState(false);
  // Define the toggleFeatures function
  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  // Define the togglePopup function
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const togglePopupp = () => {
    setShowPopupp(!showPopupp);
  };


  const openPopupp = () => {
    togglePopupp();
  };

  // Function to open the popup (you can use it in your "down-arrow" div)
  const openPopup = () => {
    togglePopup();
  };

  // Define state for the selected task and a function to handle task clicks
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (taskId) => {
    // Find the task based on the taskId
    const task = columns.column1.tasks.find((task) => task.id === taskId);
    setSelectedTask(task);
    togglePopupp();
  };

  return (
    <Provider store={store}>
      <div className="App">
        <header className="header">
           <div className="logo">
             <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Trello Logo" />
             <span>Trello</span>
           </div>
           <nav className="nav">
            <ul>
                <li>
                 <a href="#features" onClick={toggleFeatures}>
                  Features<i className="fas fa-angle-down"></i>
                 </a>
               </li>
               <li>
                 <a href="#solutions">Solutions<i className="fas fa-angle-down"></i></a>
               </li>
               <li>
                 <a href="#plans">Plans<i className="fas fa-angle-down"></i></a>
               </li>
               <li>
                 <a href="#plans">Pricing</a>
               </li>
               <li>
                 <a href="#resources" onClick={toggleFeatures}>
                   Resources<i className="fas fa-angle-down"></i>
                 </a>
               </li>
             </ul>
           </nav>
           <div className="cta">
             <a className="login-button">Login</a>
             <button className="get-trello-button">Get Trello for Free</button>
          </div>
        </header>

        <div className="header-like-div">
         <span className="header-title">FE-ASSIGNMENT</span>
          <i className="earth-icon fas fa-globe" id="earth"></i>
          <span className="board-link"><i class="fa-solid fa-bars-staggered"></i>Board</span>
          
    

       <div className="down-arrow" onClick={openPopup}>
            <i className="fas fa-chevron-down" ></i> 
          </div>
          <span id="div-h" className="filters-link">Filters <i class="fa-solid fa-arrow-up-wide-short"></i></span>
          <span id="div-h" className="profile-link"><i class="fa-solid fa-user"></i></span> 
          <span id="div-h" className="menulink"><i class="fa-solid fa-ellipsis"></i></span>
         
       </div>
           <DragDropContext onDragEnd={handleDragEnd}>
          <div className="columns">
            {Object.keys(columns).map((columnId) => {
              const column = columns[columnId];
              const isAddTaskAllowed = columnId === 'column1';
              return (
                <div key={columnId} className="column">
                  <h2>{column.title}</h2>
                  <Droppable droppableId={columnId}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="tasks"
                      >
                        {column.tasks.map((task, index) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="task"
                                onClick={() => handleTaskClick(task.id)}
                              >
                                {task.content}
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                  {isAddTaskAllowed && (
                    <div className="add-task">
                      <input
                        type="text"
                        placeholder="Add a task"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddTask(columnId, e.target.value);
                            e.target.value = '';
                          }
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </DragDropContext>

        {showPopupp && selectedTask && (
          <div className="popupp">
            <h3 className="popupp-title"><a><i className="fa-solid fa-xmark" id="x-mark"></i></a></h3>
            <div>
              <strong className="t-icon"><i class="fa-solid fa-clipboard"></i> {selectedTask.content}</strong> 
            </div>
            <div>
              <strong></strong> {selectedTask.status}
            </div>
            <div>
              <strong className='desp'><i class="fa-solid fa-bars-staggered" id="des-icon"></i> Description{selectedTask.description}</strong> 
              <strong className='acti'><i class="fa-solid fa-chart-bar"></i><span></span>Activity</strong> 
            </div>
            <div>
              <strong className="action-i">Actions</strong>
              <button id="share-icon"><i class="fa-solid fa-share-nodes"></i>Share</button>
              {/* <button><i class="fa-solid fa-pen"></i>Edit</button>
              <button><i class="fa-solid fa-square-minus"></i>Delete</button> */}
            </div>
          </div>
        )}

{showPopup && (
          <div className="popup">
            <h3 className="popup-title"> upgrade your views <i class="fa-solid fa-xmark"></i></h3>
            <ul>
              <li><i class="fa-regular fa-square-check" id='popp'></i>Board</li>
              <li><i class="fa-regular fa-square-check " id='popp'></i>Table<i class="fa-solid fa-lock"id='poppp'></i></li>
              <li><i class="fa-regular fa-square-check"id='popp'></i>Calendar<i class="fa-solid fa-lock"id='poppp'></i></li>
              <li><i class="fa-regular fa-square-check"id='popp'></i>Timeline<i class="fa-solid fa-lock"id='poppp'></i></li>
              <li><i class="fa-regular fa-square-check"id='popp'></i>Dashboard<i class="fa-solid fa-lock"id='poppp'></i></li>
              <li><i class="fa-regular fa-square-check"id='popp'></i>Map<i class="fa-solid fa-lock"id='poppp'></i></li>
            </ul>
            <h3 className="text1">See your work in new ways</h3>
            <p>
            View key timelines, assignments, data,<br></br>and more directly from your
            Trello board <br></br>with Trello Premium.
          </p>
          <a href="https://">Learn more about Trello Premium</a>
          </div>
          
        )}


     
</div>
    </Provider>
  );
}

export default App;