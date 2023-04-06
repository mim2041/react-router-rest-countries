import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Restournt from './component/Restournt/Restournt';
import Header from './Header/Header';
import About from './component/about/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import First from './component/First/First';
import Meals from './component/Meals/Meals';


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App></App>
  // },
  // {
  //   path: "/restournt",
  //   element: <Restournt ></Restournt>
  // },
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'meals',
        element: <Meals></Meals>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Fish')
      }
    ]
  },
  {
    path: '*',
    element: <div>404</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
