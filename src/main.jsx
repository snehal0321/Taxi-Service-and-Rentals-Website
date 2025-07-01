import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "login",
    element: <Login/>
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  
)
