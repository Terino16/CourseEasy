import React from "react";
import Contact from "./Pages/Contact"
import { Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Courses from "./Pages/Courses";
import Signup from "./Pages/Signup";
import SingleCoursepage from "./Pages/SingleCoursepage";
import { UserContextProvider } from "./UserContext";
function App() {
  return (
  <UserContextProvider>
     <Layout>
     <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/Courses" element={<Courses/>}></Route>
      <Route path="/Login" element={<LoginPage/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Courses" element={<Courses/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Courses/:id" element={<SingleCoursepage/>}></Route>
     </Routes>
     </Layout>
</UserContextProvider>
  );
}

export default App;
