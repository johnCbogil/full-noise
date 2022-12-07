import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from "axios"

export default function App() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => {
         console.log(response)
         setPosts(response.data)
      })
      .catch(error => {
         console.log(error)
      })
   }, [])

   return (
      <div>
      <ul>
         {
            // TODO: path here should not be hardcoded, need to pass data via loader and/or action
            posts.map(post => <Link to={`contacts/1`}><li key={post.id}>{post.title}</li></Link>)
         }
      </ul>
      </div>
    );
};