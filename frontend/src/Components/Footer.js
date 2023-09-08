import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8  fixed inset-x-0 bottom-0">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-2xl font-semibold">CourseEasy</div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/Courses" className="hover:underline">Courses</a></li>
            <li><a href="/About" className="hover:underline">About</a></li>
            <li><a href="/Contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer