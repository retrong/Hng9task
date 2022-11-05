import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'
import LinkTree from "./components/LinkTree";
import Contact from "./components/Contact";
import { 
    createBrowserRouter,
    RouterProvider,
    Route, Link
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LinkTree />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },


    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
