import axios from "axios";
import { useEffect,useState } from "react";
import CourseCard from "../Components/CourseCard";

export type Coursetype={
  _id:string;
  name:string;
  description:string;
  image: URL;
  teacher:string;
  provider:string;
  about:string;
  duration:number;
  pace:string;
}
function useGetCourse(){
  const [courses, setCourses] = useState<Coursetype[]|null>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url="http://localhost:3001/courses";
    axios.get(url).then((result)=>{
     setCourses(result.data);
     setLoading(false)
    }).catch(error => {
      console.error('Error:', error);
      setLoading(false); 
    });
  }, [])
  return{
    courses,
    loading
  }
}

const Course = () => {
 const {courses,loading}=useGetCourse();
  return (
    <div className='my-32 ml-[5rem] items-center justify-center '>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-wrap flex-row'>
          {courses? courses.map(course => (
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
          )):<div>Hi</div>}
        </div>
      )}
    </div>
  )
  }

export default Course;