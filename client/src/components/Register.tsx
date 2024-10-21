import Password from "../icons/Password"
import User from "../icons/User"
import Image from "../assets/image.png";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="h-full w-full bg-blue-300 flex items-center justify-center">

            <form action="" className="w-[375px] min-h-[375px] bg-slate-800 rounded-lg relative">
                <div className=" w-full bg-slate-900 flex justify-center items-center">
                    <h1 className="bg-blue-600 w-[10rem] text-center text-2xl font-bold rounded-lg p-1 absolute -top-7 left-1/2 -translate-x-1/2">Register</h1>
                    <img src={Image} alt="User" className="h-20 w-20 object-contain relative top-6 " />
                </div>
                <div className="w-full px-10 text-gray-800 mt-14">

                    <div className="mt-2 w-full flex flex-col items-center gap-2">
                        <div className="w-full flex  flex-col gap-2 mt-1">
                            <label htmlFor="name" className="text-gray-400 text-xs">Name</label>
                            <input type="text" id="name" className="bg-slate-500 rounded-lg p-2 focus-visible:ring-0 focus-visible:ring-offset-0 " placeholder="Enter your name" />
                        </div>

                        <div className="w-full flex  flex-col gap-2 mt-1 ">
                            <label htmlFor="email" className="text-gray-400 text-xs">Email</label>
                            <input type="text" id="email" className="bg-slate-500 rounded-lg p-2 focus-visible:ring-0 focus-visible:ring-offset-0 " placeholder="Enter your email" />
                        </div>

                        <div className="w-full flex  flex-col gap-2 mt-1 ">
                            <label htmlFor="date" className="text-gray-400 text-xs">Date of Birth</label>
                            <input type="date" id="email" className="bg-slate-500  rounded-lg p-2 focus-visible:ring-0 focus-visible:ring-offset-0 " placeholder="Enter your DOB" />
                        </div>

                        <div className="w-full flex  flex-col gap-2 mt-1 ">
                            <label htmlFor="password" className="text-gray-400 text-xs">Password</label>
                            <input type="text" id="password" className="bg-slate-500  rounded-lg p-2 focus-visible:ring-0 focus-visible:ring-offset-0 " placeholder="Enter your password" />
                        </div>



                        <button className="rounded-lg w-full p-2 text-xl mt-2 font-medium  bg-blue-600 ">
                            Register
                        </button>

                        <p className="text-blue-500 mb-4 cursor-pointer hover:underline">
                            <Link to={"/login"}>
                                Already have an Account ? Login
                            </Link>
                        </p>


                    </div>
                </div>


            </form>
        </div>
    )
}

export default Register