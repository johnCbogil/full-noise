import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import PostDetail from './PostDetail';
import { loader as postsLoader } from "./Posts";
import { loader as postDetailLoader } from "./PostDetail";
import Posts from './Posts';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: "/posts",
      element: <Posts></Posts>,
      loader: postsLoader
    },
    {
      path: "/posts/:postID",
      element: <PostDetail postNumber={1}></PostDetail>,
      loader: postDetailLoader
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
