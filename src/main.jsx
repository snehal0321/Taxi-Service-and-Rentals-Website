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
import Service from './Services.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "service",
    element: <Service/>
  },

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  
)
