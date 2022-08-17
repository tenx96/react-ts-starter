import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            Home page{" "}
            <ul>
              <li>
                <Link to={"/about"}>about</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>dashboard</Link>
              </li>
            </ul>
          </div>
        }
      />
      <Route path="/about" element={<div>About page</div>} />
      <Route path="/dashboard">
        <Route
          index
          element={
            <div>
              DASHBOARD PAGE{" "}
              <li>
                <Link to={"/dashboard/tags"}>Tags</Link>
              </li>
            </div>
          }
        ></Route>
        <Route path="tags" element={<div>DASHBOARD --^ TAGS</div>} />
      </Route>
    </Routes>
  );
};

export default App;
