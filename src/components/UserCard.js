import { Link ,useOutletcontext} from "react-router-dom";

function UserCard({user}) {
  const user=useOutletcontext();
    return (
      <article>
          <h2>{user.name}</h2>
          <Link to={`/profile/${user.id}`}>View profile</Link>
      </article>
    );
  };
  
  export default UserCard;