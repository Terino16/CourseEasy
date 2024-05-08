
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Coursetype } from "./Course"; 


const SingleCoursepage = () => {
  const BASE_URL_LOCAL = "http://localhost:3001";
  const [course, setCourse] = useState<Coursetype | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const url = `${BASE_URL_LOCAL}/Courses/${id}`;


  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setCourse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
        setLoading(false);
      });
  }, [url]);

  const handleAddToCart = () => {
    console.log("Clicked");
    if (course) {
      console.log("Clicked inside");
      try {
       // dispatch(addToCart({ courseId: course._id, quantity: 1 }));
      } catch (error) {
        console.log(error )
      }
      
    }
  };

  return (
    <div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex items-center justify-center p-8 mb-28">
            <div className="w-1/2">
              <img src={`${course?.image}`} alt="Course 1" width={500} />
            </div>
            <div className="w-1/2 mt-4">
              <h1 className="font-semibold text-5xl">{course?.name}</h1>
              <h1 className="bold font-semibold">Description : </h1>
              <h2 className="text-xl">{course?.description}</h2>

              <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Rs{course?.price}
              </button>

              <button
                onClick={handleAddToCart} 
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Add to Cart
                </span>
              </button>

              <h1 className="bold font-semibold">About</h1>
              <p className="text-xl">{course?.about}</p>
              <div className="flex my-4 ">
                <span className="items-center bg-slate-200 p-4 mr-11">
                  <h2 className="text-xl font-bold ">
                    {" "}
                    Duration : {course?.duration} Weeks
                  </h2>
                </span>
                <span className="items-center bg-slate-200 p-4 mx-11">
                  <h2 className="text-xl font-bold ">Pace : {course?.pace}</h2>
                </span>
              </div>
              <span className="flex justify-between ">
                <h2 className="text-xl font-semibold">
                  {" "}
                  Teacher : {course?.teacher}
                </h2>
                <h2 className="text-xl font-semibold">
                  {" "}
                  Provided by :{course?.provider}
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
