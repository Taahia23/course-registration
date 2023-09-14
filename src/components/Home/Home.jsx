/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";


const Home = () => {
    const [allCourses, setAllCourses] = useState([]);


    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCourses(data))
    },[])

    return (

        <div className="p-9" >
            <h1 className="text-5xl font-bold text-center mb-14">Course Registration</h1>
            <div>
                <div className="cart-container flex flex-wrap gap-4 w-[600px">
                   {
                    allCourses.map((course )=> 
                    <div className="cart border-2 border-solid  w-[320px] h-[400px]  rounded-lg shadow-slate-500/50">
                    <img className="p-2" src={course.img} alt="" />
                    <div className="p-2">
                        <h3 className="text-xl font-bold mb-2" >{course.title}</h3>
                        <p className=""><small>{course.body}</small></p>
                        {/* credit, price section */}
                        <div className="flex justify-between mt-3">
                            <h3 className="font-extrabold">$</h3>
                            <h3 className="font-extrabold">Price: {course.price}</h3>
                            <h3 className="font-extrabold">Credit: 1 hr</h3>
                        </div>
                        <div className="text-center mt-4">
                            <button className="bg-blue-500 px-5 py-2 rounded-lg text-white font-bold w-full">Select</button>
                        </div>
                    </div>


                </div>
                        )
                   }
                </div>
            </div>
        </div>


    );
};

export default Home;