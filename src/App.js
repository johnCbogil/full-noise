import { Link } from "react-router-dom";
import PostsNoRouter from "./PostsNoRouter";

export default function App() {
   return (
      <div>
      <h1>Home Boi</h1>
      <li>
      <Link to={'/posts'}>View Posts</Link>
      </li>

      <div style={{marginTop: '20px'}}>
         No Router
         <PostsNoRouter />
      </div>
      </div>
    );
};
