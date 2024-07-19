import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import TodoList from "./components/todoList";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
      <div className="absolute z-30">
        <Sidebar isOpen={isSidebarOpen} />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
