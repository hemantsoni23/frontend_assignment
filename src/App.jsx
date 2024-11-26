import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
        <div className="h-full pt-[64px] scrollbar-hide overflow-y-auto">
          <Outlet />
        </div>
    </React.Fragment>
  );
}

export default App;