
import Michigan from "/Images/Michigan.png";
import Duke from "/Images/Duke.png";
import Google from "/Images/Google.png";
import johnhopkins from "/Images/johnhopkins.png";
import Illinois from "/Images/Illinois.png";
import Courses from "./Course";


const Home = () => {
  return (
    <div className="h-full w-full md:mb-40">
      <div className="flex flex-row py-16 px-36  items-center">
        <div className="flex flex-col space-y-3">
          <p className="text-6xl text-black font-bold">
            Learn Any Skill to Advance your <p className="text-blue-800">Career Path</p>
          </p>
          
          <button className="p-1 w-fit">
            <p className="font-bold text-black py-4 text-left">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid hic, tempora magnam tempore possimus sequi maiores vel totam iure vero quod quis repellat similique dolores eius. Deleniti aut harum laudantium quod tempore nemo dolor necessitatibus. Quae ad natus, laborum saepe repellendus labore, similique esse distinctio enim ut, ex quam.
            </p>
          </button>

          <div className="flex items-center justify-between px-8">
          <button className="p-3 bg-blue-700 w-fit">
            <p className="font-bold text-white">Start a 7-Day Free Trial</p>
          </button>

          <img src="https://png.pngtree.com/png-vector/20220721/ourmid/pngtree-four-star-rating-sign-png-image_6026608.png" width={100}/>
         
          </div>
        </div>
        <div>
       <img src="https://media.istockphoto.com/id/875960654/photo/its-such-a-life-changing-moment.jpg?s=612x612&w=0&k=20&c=qahQubF_pLHXO4nwX_b05jeLmmaHkXad2FXszaAL5ss=" width={1200}/>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4  divide-y-2 border-b-2">
        <p className="text-3xl font-semibold text-gray-600">
          Learn from 275+ leading universities and companies with Coursera Plus
        </p>
        <div className=" flex flex-row space-x-11 p-4 ">
          <img src={Illinois} alt="Illinois" width={160} className="p-4" />
          <img src={Google} alt="Illinois" width={160} className="p-4" />
          <img src={Michigan} alt="Illinois" width={160} className="p-4" />
          <img src={Duke} alt="Illinois" width={160} className="p-4" />
          <img src={johnhopkins} alt="Illinois" width={160} className="p-4" />
        </div>
      </div>
      <div className="flex flex-col items-center">
      <p className="font-semibold text-3xl p-4">Invest in your professional goals with Coursera Plus</p>
      <p className="text-gray-500 text-center p-3">
      Get unlimited access to over 90% of courses, Projects, Specializations, and Professional Certificates on Coursera,<br/> taught by top instructors from leading universities and companies.
      </p>
      <Courses/>
      </div>
    </div>
  )
}

export default Home