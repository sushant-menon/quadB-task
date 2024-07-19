import React from "react";

const items = [
  {
    name: "Hello",
  },
  {
    name: "Hello2",
  },
  {
    name: "Hello3",
  },
  {
    name: "Hello4",
  },
  {
    name: "Hello2",
  },
  {
    name: "Hello3",
  },
  {
    name: "Hello4",
  },
];

const TodoList = () => {
  return (
    <>
      <div className="mt-8 text-center xl:mt-28">
        {/* Heading */}
        <h1>Your Todo</h1>

        {/* input field for the items */}

        <div className="mt-12 bg-[#303630] h-36 xl:h-52 text-right">
          <div className="flex">
            {/* input field */}
            <input
              className="mt-2 w-full py-3 bg-transparent outline-none xl:h-36 xl:ml-2 h-20 ml-1 text-white"
              type="text"
              placeholder="Enter items"
            />
            {/* Button to add task */}
          </div>
          <button className="rounded-lg py-2 px-3 ml-1 border-white border bg-[#347136] text-white mr-2">
            Add Item
          </button>
        </div>
      </div>
      <div className="mt-7  flex flex-col justify-center items-center">
        {/* List items heading */}
        <h2 className="text-center">Todo Items</h2>
        <div className="mt-5">
          <ListItems />
        </div>
        <h2 className="text-center mt-6">Completed Tasks</h2>
        <div className="mt-5">
          <CompletedTasks />
        </div>
      </div>
    </>
  );
};

export default TodoList;

const ListItems = () => {
  return (
    // For mobile/small screen
    <>
      <div className="block xl:hidden">
        {/* Completed, task and checked button */}
        {items.map(i => {
          return (
            <>
              <div className="border border-green-800 w-screen border-l-0 border-r-0 py-3 border-dashed">
                <div className="flex items-center justify-around">
                  <div className="flex-1 flex space-x-3 ml-2">
                    <input type="checkbox" name="complete" id="completed" />
                    <p>Task1</p>
                  </div>
                  <button className="mr-5">✏️</button>
                  <button className="mr-2">🗑️</button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* For Desktop screen */}
      <div className="flex flex-wrap gap-3 ml-14">
        {items.map(i => {
          return (
            <div className="hidden xl:block">
              <div className="border-4 border-green-800 w-72 h-40 py-3 border-dashed hover:border-solid">
                <div className="flex items-center justify-around h-full">
                  <div className="flex-1 flex space-x-3 ml-2">
                    <input type="checkbox" name="complete" id="completed" />
                    <p>Task1</p>
                  </div>
                  <button className="mr-5">✏️</button>
                  <button className="mr-2">🗑️</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const CompletedTasks = () => {
  return (
    <div className="border-2 w-screen border-l-0 border-r-0 py-3 border-sky-900">
      <div className="flex items-center justify-around">
        <div className="flex-1 flex space-x-3 ml-2">
          <p>Task1</p>
        </div>

        <button className="mr-2">🗑️</button>
      </div>
    </div>
  );
};
