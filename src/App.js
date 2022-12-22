import "./App.css";
import { RouterProvider } from "react-router";
import Home from "./Component/Home";
import { createBrowserRouter } from "react-router-dom";
import {  useState } from "react";
import User from "./Component/User";
import Form from "./Component/Form";

function App() {
  const [state, setstate] = useState([]);
  const [editState, setEditState] = useState("");
  const [updateState , setUpdateState] = useState("")
  
  
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/User",
          element: (
            <User
              setEditState={setEditState}
              setstate={setstate}
              state={state}
              updateState={updateState}
            />
          ),
        },
        {
          path: "/Form",
          element: (
            <Form
              
              setUpdateState={setUpdateState}
              editState={editState}
              setstate={setstate}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routing} />;
}

export default App;
