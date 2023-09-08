import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleCoursepage = () => {
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/Courses/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCourse(data); // Update the courses state with the fetched data
        setLoading(false); // Set loading to false when data is available
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false); // Handle error and set loading to false
      });
  }, [id]);
  return (
    <div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex items-center justify-center p-8 mb-28">
            <div className="w-1/2">
              <img src={`${course.image}`} alt="Course 1" width={500} />
            </div>
            <div className="w-1/2 mt-4">
              <h1 className="font-semibold">{course.name}</h1>
              <h1 className="bold font-semibold">Description : </h1>
              <h2 className="text-xl">{course.description}</h2>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 mt-5 rounded-full text-lg">
                Buy Now
              </button>
              <h1 className="bold font-semibold">About</h1>
              <p className="text-xl">{course.about}</p>
              <div className="flex my-4 ">
                <span className="items-center bg-slate-200 p-4 mr-11">
                  <h2 className="text-xl font-bold ">
                    {" "}
                    Duration : {course.duration} Weeks
                  </h2>
                </span>
                <span className="items-center bg-slate-200 p-4 mx-11">
                  <h2 className="text-xl font-bold ">Pace : {course.pace}</h2>
                </span>
              </div>
              <span className="flex justify-between ">
                <h2 className="text-xl font-semibold">
                  {" "}
                  Teacher : {course.teacher}
                </h2>
                <h2 className="text-xl font-semibold">
                  {" "}
                  Provided by :{course.provider}
                </h2>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCoursepage;
