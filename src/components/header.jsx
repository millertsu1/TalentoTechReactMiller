import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { useState } from "react";

export default function Header() {
  const isAutheticated = useSelector((state) => state.auth.isAutheticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("sessionData");
    navigate("/login");
  };

  return (
    <nav className="bg-purple-800 text-white py-4 flex justify-between items-center">
      <ul className="flex items-center px-8 space-x-5">
      <Link to="/"><h1 className="text-3xl font-lexend">Talento Tech Project</h1></Link>
        {!isAutheticated ? null : (
          <>
            <li>
              <Link to="/" className="hover:text-blue-500">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/user" className="hover:text-blue-500">
                Usuarios
              </Link>
            </li>
            <li>
              <Link to="/create-house" className="hover:text-blue-500">
                Crear casas
              </Link>
            </li>
            <li>
            <Link to="/chat" className="hover:text-blue-500">
            Chat
           </Link>
           </li>
           <li>
            <Link to="/house" className="hover:text-blue-500">
            Casas
           </Link>
           </li>
          </>
        )}
        <li>
          <Link to="/create-user" className="hover:text-blue-500">
            Crear Usuario
          </Link>
        </li>
        
      </ul>
      {/* DropDown Usuario Logueado */}
      <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 px-5">
        {isAutheticated ? (
          <>          
            <div className="relative">
              <img
                src={`https://nodejs-chi-seven.vercel.app/${user.avatar}`}
                className="rounded-full h-10 w-10 cursor-pointer"
                onClick={toggleMenu}
              />
              {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <p className="block px-4 py-2 text-sm text-red-400">{user.name} {user.lastname}</p>
                <Link to={`/user/${user._id}`}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                </Link>
                <Link to={`/change-password`}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Change Password
                </Link>
                <a
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </a>
              </div>
              )} 
            </div>
          </>
        ) : (
          <Link to="/login" className="hover:text-blue-500">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}