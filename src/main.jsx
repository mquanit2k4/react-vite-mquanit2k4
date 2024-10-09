import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/login.jsx'
import ProductPage from './pages/product.jsx'
import UserPage from './pages/user.jsx'
import BookPage from './pages/book.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/global.css";
import TodoApp from './components/todo/TodoApp.jsx'
import ErrorPage from './pages/error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp/>
      },
      {
        path: "/users",
        element: <UserPage/>,
      },
      {
        path: "/books",
        element: <BookPage/>,
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/products",
    element: <ProductPage/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // Strict Mode trong react lam code chay 2 lan
  // <React.StrictMode> 
    <RouterProvider router={router} />
  // </React.StrictMode>,
);
