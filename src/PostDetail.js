import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const posts = await getPosts();
    const post = posts.find((post) => post.id == params.postID);
    return { post };
 }
 
 export async function getPosts() {
    return await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    .then(data => {
       return data
    }, []);
 }

export default function PostDetail() {
    const { post } = useLoaderData();
    
    return (
        <>Post Detail Test for {post.title}</>
        );
}