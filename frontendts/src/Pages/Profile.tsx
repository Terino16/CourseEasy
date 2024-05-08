import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export type UserType = {
  _id: string;
  name: string;
  email: string;
  image: string;
  dob: string;
  gender: string;
  about: string;
  courses: number;
  completed: string;
}

const Profile: React.FC = () => {
  const BASE_URL_LOCAL = "http://localhost:3001";
  const { id } = useParams<{ id: string }>();
  const url = `${BASE_URL_LOCAL}/user/${id}`;

  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, [url]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState!,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(url, user);
      setEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className='container mx-auto'>
      <div className='text-black text-5xl font-bold flex '>
        <p className='text-blue-500'>User</p> Profile
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          {editing ? (
            <div>
              <div className='flex items-center '>
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  className='py-2 px-5 bg-gray-300 text-black font-normal text-lg rounded-lg my-3'
                />
              </div>
              <div>
              <label htmlFor="name">Email :</label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  className='py-2 px-5 bg-gray-300 text-black font-normal text-lg rounded-lg my-3'
                  onChange={handleInputChange}
                />
              </div>
              <div>
              <label htmlFor="name">Date Of Birth :</label>
                <input
                  type="date"
                  name="dob"
                  value={user.dob}
                  className='py-2 px-5 bg-gray-300 text-black font-normal text-lg rounded-lg my-3'
                  onChange={handleInputChange}
                />
              </div>
              <div>
              <label htmlFor="name">Gender :</label>
                <input
                  type=""
                  name="gender"
                  className='py-2 px-5 bg-gray-300 text-black font-normal text-lg rounded-lg my-3'
                  value={user.gender}
                  onChange={handleInputChange}
                />
              </div>
              <div>
              <label htmlFor="name">About :</label>
                <input
                  type="text"
                  placeholder='Write something about you'
                  className='py-2 px-5 bg-gray-300 text-black font-normal text-lg rounded-lg my-3'
                  name="about"
                  value={user.about}
                  onChange={handleInputChange}
                />
              </div>
              <button className="p-4 font-semibold bg-green-500 text-white" onClick={handleSubmit}>Save</button>
            </div>
          ) : (
            <div>
              <div>
                <p>Name: {user.name}</p>
              </div>
              <div>
                <p>Email: {user.email}</p>
              </div>
              <div>
                <p>Date of Birth: {user.dob}</p>
              </div>
              <div>
                <p>Gender: {user.gender}</p>
              </div>
              <div>
                <p>About: {user.about}</p>
              </div>
              <button className='bg-red-500 text-black p-4 font-semibold' onClick={() => setEditing(true)}>Edit</button>
            </div>
          )}
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  )
}

export default Profile;
