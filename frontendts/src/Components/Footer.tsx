import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8  fixed inset-x-0 bottom-0">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-2xl font-semibold">CourseEasy</div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/Courses" className="hover:underline">Courses</Link></li>
            <li><Link to="/About" className="hover:underline">About</Link></li>
            <li><Link  to="/Contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer