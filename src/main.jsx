import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: ()=> fetch('../public/jobs.json')
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('../public/jobs.json')
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
