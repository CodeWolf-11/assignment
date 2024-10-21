import Password from "../icons/Password"
import User from "../icons/User"
import Image from "../assets/image.png";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="h-full w-full bg-blue-300 flex items-center justify-center">

            <form action="" className="w-[375px] min-h-[375px] bg-slate-800 rounded-lg relative">
                <div className=" w-full bg-slate-900 flex justify-center items-center">
                    <h1 className="bg-blue-600 w-[10rem] text-center text-2xl font-bold rounded-lg p-1 absolute -top-7 left-1/2 -translate-x-1/2">Login</h1>
                    <img src={Image} alt="User" className="h-20 w-20 object-contain relative top-6 " />
                </div>
                <div className="w-full px-10 text-gray-800 mt-14">

                    <div className="mt-2 w-full flex flex-col items-center gap-2">
                        <div className="w-full flex bg-slate-500 p-2 rounded-lg gap-2 items-center">
                            <User />
                            <input type="text" className="bg-slate-500 border-l-2 border-slate-400 px-2 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none" placeholder="Enter username" />
                        </div>

                        <div className="w-full flex bg-slate-500 p-2 rounded-lg gap-2 items-center">
                            <Password />
                            <input type="password" className="bg-slate-500 border-l-2 border-slate-400 px-2 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none" placeholder="Enter password" />
                        </div>
                        <span className="text-end ml-auto text-blue-700 hover:underline cursor-pointer">
                            Forget password ?
                        </span>

                        <button className="rounded-lg w-full p-2 text-xl font-medium  bg-blue-600 ">
                            Login
                        </button>

                        <p className="text-blue-500 cursor-pointer hover:underline">
                            <Link to={"/register"}>
                                Don't have an Account ? register
                            </Link>
                        </p>


                    </div>
                </div>


            </form>
        </div>
    )
}

export default Login