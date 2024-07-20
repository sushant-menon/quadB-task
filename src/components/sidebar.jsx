import React from "react";
import { useSelector } from "react-redux";

const Sidebar = ({ isOpen }) => {
  return (
    <div>
      {isOpen ? (
        <div>
          <SidebarContent />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;

const SidebarContent = () => {
  const list = useSelector(state => state.todo.taskItems);

  return (
    <div className="bg-gray-950 w-full h-screen xl:w-full flex items-center justify-center">
      <div className="bg-gray-400/15 h-3/4 w-full mx-6 flex flex-col items-center justify-center">
        {/* Profile Photo */}
        <div className="h-full transform -translate-y-10">
          <img className="h-24" src="profile.png" alt="profile-img" />
          <p className="text-center mt-2 text-white font-semibold">Hey User</p>
        </div>
        {/* Total items in the list count */}
        <div className="bg-blue-500 h-full mb-64 xl:mb-52 w-40 mx-5 text-center xl:w-80 xl:transform xl:-translate-y-24">
          <h1 className="mt-2 xl:mt-8 font-extrabold text-lg xl:text-4xl">
            Total Items
          </h1>
          <p className="border border-b border-gray-600 w-1/3 mx-auto mt-3 xl:mt-6"></p>
          <div className="mt-10 xl:mt-16 font-extrabold text-3xl xl:text-5xl text-red-300">
            {list.length}
          </div>
        </div>
      </div>
    </div>
  );
};
