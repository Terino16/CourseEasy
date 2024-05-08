
import { Link } from 'react-router-dom';
import { useRecoilValue,useSetRecoilState } from 'recoil';
import { authState } from '../Store/UserStore';
import Cookies from 'js-cookie';
import Logo from './Logo';
const Navbar = () => {
  const user=useRecoilValue(authState);
  const setUser = useSetRecoilState(authState);
  const handlelogout=()=>{
    Cookies.set("name",'');
    Cookies.set("id","");
    Cookies.set("token","");
    setUser('');
  }
  return ( 
    <nav className=" p-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-3 grid-flow-co items-center">
        <div>
        <Logo/>
        </div>
      
        <div className="flex items-center justify-around">
          <a href="/" className="text-gray-500    hover:text-blue-500 ">
            Home
          </a>
          <a href="/Courses" className="text-gray-500  hover:text-blue-500 ">
            Courses
          </a>
          <a href="/About" className="text-gray-500   hover:text-blue-500">
            About
          </a>
          <a href="/Contact" className="text-gray-500   hover:text-blue-500">
            Contact
          </a>
        </div>
        <div className="space-x-2 text-gray-500">
        {user ? (
              <div className='space-x-2 flex items-center justify-end'>
              <button
                type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={handlelogout}
              >
                Logout
              </button>
              <button>
              <a className="border-gray-300 p-3 flex" href={`/profile/${user}`}>
              <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" width={35}/>
              </a>
              </button>
              <button>
              <a href={`/cart`}>
                <img src="https://cdn-icons-png.freepik.com/512/8460/8460507.png" width={35}/>
              </a>
              </button>
              </div>
            ) : (
              <>
                <Link className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" to="/Login">
                  Login
                </Link>
                <Link className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" to="/Signup">
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