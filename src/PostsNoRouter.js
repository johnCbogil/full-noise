import { useEffect, useState } from "react";
import PostDetailNoRouter from "./PostDetailNoRouter";

function getPosts() {
   return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   .then(response => response.json())
   .then(data => {
      return data
   });
}

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(undefined);

    useEffect(() => {
        const loadData = async () => {
            try {
                const postsData = await getPosts();
                setPosts(postsData);
            } catch (err) {
                console.log(err);
                setPosts([]);
            }
        }
        
        loadData();
    })

    const post = selectedPostId && posts.find((post) => post.id === selectedPostId)

    return (
        <div>
        <ul>
         {
            posts.map( post =>
             <li key={post.id} onClick={() => setSelectedPostId(post.id)}>
             {/* <Link to={`/posts/${post.id}`}>{post.title}</Link> */}
                <div><a href="#">{post.id} - {post.title}</a></div>
             </li>
            )
         }
        </ul>
        {post &&
        <div>
            Post Details
            <PostDetailNoRouter id={post.id} title={post.title} />
        </div>
        }
        </div>
    )
}