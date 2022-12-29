import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
   const posts = await getPosts();
   return { posts };
}

export async function getPosts() {
   return await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   .then(response => response.json())
   .then(data => {
      return data
   });
}

export default function App() {
   const { posts } = useLoaderData();

   return (
      <div>
      <ul>
         {
            posts.map(post => <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)
         }
      </ul>
      </div>
    );
};
