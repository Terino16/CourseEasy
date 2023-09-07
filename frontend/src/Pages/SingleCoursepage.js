import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleCoursepage = () => {
    const [course, setCourse] = useState();
    const [loading, setLoading] = useState(true);
    const {id}=useParams();
  
    useEffect(() => {
        fetch(`http://localhost:3001/Courses/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(data => {
            setCourse(data); // Update the courses state with the fetched data
            setLoading(false); // Set loading to false when data is available
          })
          .catch(error => {
            console.error('Error:', error);
            setLoading(false); // Handle error and set loading to false
          });
      }, [id]);
  return (
    <div>
         <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex items-center p-8'>
            <div>
            <img src={`${course.image}`} alt="Course 1"/>
            </div>
            <div className='p-4'> 
            <h1>{course.name}</h1>
            <h2>{course.description}</h2>
            <span className='flex justify-between '>
            <h2>{course.teacher}</h2>
            <h2>{course.provider}</h2>
            </span>
            </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default SingleCoursepage