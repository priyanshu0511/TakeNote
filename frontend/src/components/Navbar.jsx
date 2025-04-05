import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

  const {logout} = useLogout();
  const {user}=useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
    logout();
  }

  return (
    <nav className="bg-darkblack z-50 text-lightblue p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">TakeNote.</h1>
      <div className="flex gap-10 items-center">
        {user && <span className="text-gray-200"> Hi, {user.name}!</span>}
        <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline hover:text-gray-100">Home</Link>
        {!user &&<Link to="/login" className="hover:underline hover:text-gray-100 bg-midblue px-2 py-1 rounded-xl">Login</Link>}
        {user &&<button className="hover:underline hover:text-gray-100 bg-midblue px-2 py-1 rounded-xl" onClick={handleClick}>Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
