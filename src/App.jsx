import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import TodoList from "./components/todoList";
import { Provider } from "react-redux";
import { store } from "../store";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Provider store={store}>
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
      <div className="absolute z-30">
        <Sidebar isOpen={isSidebarOpen} />
      </div>
      <TodoList />
    </Provider>
  );
}

export default App;
