
import { Link } from 'react-router-dom';
import { useRecoilValue,useSetRecoilState } from 'recoil';
import { authState } from '../Store/UserStore';
import Cookies from 'js-cookie';
const Navbar = () => {
  const user=useRecoilValue(authState);
  const setUser = useSetRecoilState(authState);
  const handlelogout=()=>{
    Cookies.set("name",'');
    setUser('');
  }
  return ( 
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">Courseasy</div>
        <div className="space-x-4">
          <a href="/" className="text-white hover:underline">
            Home
          </a>
          <a href="/Courses" className="text-white hover:underline">
            Courses
          </a>
          <a href="/About" className="text-white hover:underline">
            About
          </a>
          <a href="Contact" className="text-white hover:underline">
            Contact
          </a>
        </div>
        <div className="space-x-2 text-white">
        {user ? (
              <div className='flex space-x-2'>
              <button
                className="border-[1px] border-gray-300 p-3"
                onClick={handlelogout}
              >
                Logout
              </button>
              <span className='border-[1px] border-gray-300 p-3'>
              {user}
              </span>
              </div>
            ) : (
              <>
                <Link className="border-[1px] border-gray-300 p-3" to="/Login">
                  Login
                </Link>
                <Link className="border-[1px] border-gray-300 p-3" to="/Signup">
                  Signup
                </Link>
              </>
            )}
          
        </div>
      </div>
    </div>
  </nav>

);
}
export default Navbar