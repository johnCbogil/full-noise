import { Link } from "react-router-dom";

export default function App() {
   return (
      <div>
      <h1>Home Boi</h1>
      <li>
      <Link to={'/posts'}>View Posts</Link>
      </li>
      </div>
    );
};
