import React, { useEffect, useState } from 'react';
import CourseCard from '../Components/CourseCard';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("http://localhost:3001/Courses", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setCourses(data); // Update the courses state with the fetched data
        setLoading(false); // Set loading to false when data is available
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false); // Handle error and set loading to false
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-wrap flex-row'>
          {courses.map(course => (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
