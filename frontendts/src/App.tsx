import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Course from "./Pages/Course";
import Contact from "./Pages/Contact"
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Signup from "./Pages/Signup";
import SingleCoursepage from "./Pages/SingleCoursepage";
import About from "./Pages/About";
const App = () => {
  return (
   <Layout>
    <Routes>
        <Route element={<Home/>} index></Route>
        <Route path="/Courses" element={<Course/>}></Route>
      <Route path="/Login" element={<LoginPage/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Courses/:id" element={<SingleCoursepage/>}></Route>
    </Routes>
   </Layout>
  )
}

export default App