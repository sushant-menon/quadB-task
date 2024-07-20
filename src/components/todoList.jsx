import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  completedTask,
  removeCompletedItem,
  removeItems,
} from "../../slice/todoSlice";

const TodoList = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();
  const itemsName = useSelector(state => state.todo.taskItems);

  const handleAddTask = () => {
    if (taskName) {
      dispatch(addItems({ name: taskName }));
      setTaskName("");
    }
  };

  return (
    <>
      <div className="mt-8 text-center xl:mt-28">
        {/* Heading */}
        <h1 className="text-5xl text-violet-800">YourTodo📖</h1>

        {/* input field for the items */}

        <div className="mt-12 bg-[#303630] h-36 xl:h-52 text-right">
          <div className="flex">
            {/* input field */}
            <input
              className="mt-2 w-full py-3 bg-transparent outline-none xl:h-36 xl:ml-2 h-20 ml-1 text-white"
              type="text"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              placeholder="Enter items"
            />
            {/* Button to add task */}
          </div>
          <button
            onClick={handleAddTask}
            className="rounded-lg py-2 px-3 ml-1 border-white border bg-[#347136] text-white mr-2"
          >
            Add Item
          </button>
        </div>
      </div>
      <div className="mt-7  flex flex-col justify-center items-center">
        {/* List items heading */}
        <h2 className="text-center text-2xl font-bold xl:text-4xl">
          Todo Items
        </h2>
        <div className="mt-5">
          <ListItems itemsName={itemsName} />
        </div>
        <div className="border border-t-0 border-b-2 border-black w-1/2 mt-14 xl:mt-24 xl:w-full"></div>
        <h2 className="text-center mt-16 text-2xl font-bold xl:text-4xl xl:mt-16">
          Completed Tasks
        </h2>

        <div className="mt-5">
          <CompletedTaskss />
        </div>
      </div>
    </>
  );
};

export default TodoList;

const ListItems = ({ itemsName }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = id => {
    dispatch(removeItems({ id }));
  };

  const handleCompletedItem = id => {
    dispatch(completedTask({ id }));
  };

  return (
    // For mobile/small screen
    <>
      <div className="block xl:hidden">
        {/* Completed, task and checked button */}
        {itemsName.length === 0 ? (
          <div className="font-extralight mt-8">NO ITEMS TO DISPLAY!!!</div>
        ) : (
          itemsName.map(i => {
            return (
              <div
                key={i.id}
                className="border border-green-800 w-screen border-l-0 border-r-0 py-3 border-dashed"
              >
                <div className="flex items-center justify-around">
                  <div className="flex-1 flex space-x-3 ml-2">
                    <input
                      onChange={() => handleCompletedItem(i.id)}
                      type="checkbox"
                      name="complete"
                      id="completed"
                    />
                    <p>{i.name}</p>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(i.id)}
                    className="mr-2"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* For Desktop screen */}

      <div className="flex flex-wrap gap-3 ml-4">
        {itemsName.length === 0 ? (
          <div className="hidden xl:block mt-12 text-2xl font-extralight">
            NO ITEMS TO DISPLAY!!!
          </div>
        ) : (
          itemsName.map(i => {
            return (
              <div key={i.id} className="hidden xl:block">
                <div className="border-4 border-green-800 w-72 h-40 py-3 border-dashed hover:border-solid">
                  <div className="flex items-center justify-around h-full">
                    <div className="flex-1 flex space-x-3 ml-2">
                      <input
                        onChange={() => handleCompletedItem(i.id)}
                        type="checkbox"
                        name="complete"
                        id="completed"
                      />
                      <p>{i.name}</p>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(i.id)}
                      className="mr-2"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

const CompletedTaskss = () => {
  const taskCompleted = useSelector(state => state.todo.completedTasks);

  const dispatch = useDispatch();

  const handleRemoveCompletedTask = id => {
    dispatch(removeCompletedItem({ id }));
  };

  return (
    <div>
      {taskCompleted.length === 0 ? (
        <div className="xl:mt-12 xl:text-2xl font-extralight  mt-8">
          NO TASK COMPLETED!!!
        </div>
      ) : (
        taskCompleted.map(i => (
          <div
            key={i.id}
            className="border-2 w-screen border-l-0 border-r-0 py-3 border-sky-900"
          >
            <div className="flex items-center justify-around">
              <div className="flex-1 flex space-x-3 ml-2">
                <p>{i.name}</p>{" "}
                {/* Ensure this line is displaying a string, not an object */}
              </div>
              <button
                onClick={() => handleRemoveCompletedTask(i.id)}
                className="mr-2"
              >
                🗑️
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
