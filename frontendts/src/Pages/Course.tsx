import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "../Components/CourseCard";

export type Coursetype = {
  _id: string;
  name: string;
  description: string;
  image: URL;
  tags:string;
  reviews:string
  teacher: string;
  provider: string;
  about: string;
  duration: number;
  pace: string;
  price:number
}

const coursetype = [
  {
    id: 1,
    name: "Mobile Development"
  },
  {
    id: 2,
    name: "Coding"
  },
  {
    id: 3,
    name: "Game Development"
  },
  {
    id: 4,
    name: "Cloud"
  },
  {
    id: 5,
    name: "Algorithms"
  }
]

function useGetCourse() {
  const BASE_URL_LOCAL = "http://localhost:3001";
  const [courses, setCourses] = useState<Coursetype[] | null>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = `${BASE_URL_LOCAL}/courses`;
    axios.get(url).then((result) => {
      setCourses(result.data);
      setLoading(false)
    }).catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });
  }, [])
  return {
    courses,
    loading
  }
}

const Course = () => {
  const [filter, setFilter] = useState<string>(""); // State to store the selected filter
  const { courses, loading } = useGetCourse();

  // Function to filter courses based on the selected filter
  const filteredCourses = courses ? courses.filter(course => {
    if (!filter) return true; // If no filter selected, show all courses
    return course.tags.toLowerCase().includes(filter.toLowerCase());
  }) : [];

  return (
    <div className="container m-auto mb-28">
      <div className="flex items-center justify-between mx-auto">
        {coursetype.map((course) => (
          <span key={course.id} className={`px-4 py-2 rounded-xl border-[1px] ${filter === course.name ? 'bg-blue-500 text-white' : ''}`} onClick={() => setFilter(course.name)}>
            {course.name}
          </span>
        ))}
      </div>
      <div className="">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-wrap flex-row'>
          {/* Render filtered courses */}
          {filteredCourses.length > 0 ? filteredCourses.map(course => (
            <div key={course._id}>
              <CourseCard
                id={course._id}
                name={course.name}
                description={course.description}
                image={course.image}
                teacher={course.teacher}
                provider={course.provider}
              />
            </div>
          )) : <div>No courses found.</div>}
        </div>
      )}
      </div>
    </div>
  )
}

export default Course;
