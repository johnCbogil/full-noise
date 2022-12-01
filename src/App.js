import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { PostDetail } from './PostDetail';
import { Posts } from './Posts';

export default function App() {
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   });

   return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="posts" element={<Posts/>}/>
      <Route path="posts/:userID" element={<PostDetail/>}/>
    </Routes>
    );
};