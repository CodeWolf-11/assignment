import { FormEvent, useState } from "react";
import Image from "../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { REGISTER_URL } from "../lib/ApiEndpoints";
import { useAuth } from "../store/AuthProvider";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [DOB, setDOB] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [rootError, setRootError] = useState("");
    const { setIsLoggedIn } = useAuth();
    const [errors, setErrors] = useState({
        email: "",
        DOB: "",
        password: "",
        name: ""
    });

    const navigate = useNavigate();

    const onSubmit = async (e: FormEvent) => {
        try {

            setIsLoading(true);
            e.preventDefault();

            const res = await axios.post(REGISTER_URL, {
                email,
                password,
                DOB,
                name,
            });

            setEmail("");
            setPassword("");
            setName("");
            setDOB("");
            setErrors({
                email: "",
                DOB: "",
                name: "",
                password: ""
            });
            setIsLoading(false);
            localStorage.setItem("token", res?.data?.token);
            localStorage.setItem("user", JSON.stringify(res?.data?.user));
            setIsLoggedIn(true);
            navigate("/");

        } catch (error) {
            setIsLoading(false);
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    setErrors(error.response.data?.errors);
                    return;
                }

                setRootError(error.response?.data.message);
                setErrors({
                    email: "",
                    password: "",
                    name: "",
                    DOB: ""
                });
            }

        }
    }

    return (
        <div className="h-full w-full  flex items-center justify-center">

            <form onSubmit={onSubmit} action="" className="w-[375px] min-h-[400px] bg-slate-800 rounded-lg relative">
                <div className=" w-full bg-slate-900 flex justify-center items-center">
                    <h1 className="bg-blue-600 w-[10rem] text-center text-2xl font-bold rounded-lg p-1 absolute -top-7 left-1/2 -translate-x-1/2">Register</h1>
                    <img src={Image} alt="User" className="h-20 w-20 object-contain relative top-6 " />
                </div>
                <div className="w-full px-10 text-gray-800 mt-2">

                    <div className="w-full flex flex-col items-center gap-1">
                        <div className="w-full flex  flex-col  mt-4 gap-1">
                            <label htmlFor="name" className="text-gray-400 text-xs">Name</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-slate-500 rounded-lg p-2 focus-visible:ring-0 focus-visible:ring-offset-0 " placeholder="Enter your name" />
                            <span className="text-rose-600 text-start text-xs">
                                {errors.name}
                            </span>
                        </div>


                        <div className="w-full flex  flex-col gap-1">
                            <label htmlFor="email" className="text-gray-400 text-xs">Email</label>
                            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-500 rounded-lg p-2 focus-visible:ring-0 focus-visible:ring-offset-0 " placeholder="Enter your email" />
                            <span className="text-rose-600 text-start text-xs">
                                {errors.email}
                            </span>
                        </div>

                        <div className="w-full flex  flex-col  gap-1">
                            <label htmlFor="date" className="text-gray-400 text-xs">Date of Birth</label>
                            <input type="date" id="email" value={DOB} onChange={(e) => setDOB(e.target.value)} className="bg-slate-500  rounded-lg p-2 focus-visible:ring-0 focus-visible:ring-offset-0 " placeholder="Enter your DOB" />
                            <span className="text-rose-600 text-start text-xs">
                                {errors.DOB}
                            </span>
                        </div>

                        <div className="w-full flex  flex-col  gap-1 ">
                            <label htmlFor="password" className="text-gray-400 text-xs">Password</label>
                            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-slate-500  rounded-lg p-2 focus-visible:ring-0 focus-visible:ring-offset-0 " placeholder="Enter your password" />
                            <span className="text-rose-600 text-start text-xs">
                                {errors.password}
                            </span>
                        </div>



                        <button disabled={isLoading} className="rounded-lg w-full p-2 text-xl mt-2 font-medium  bg-blue-600 ">
                            {isLoading ? "Processing..." : "Register"}
                        </button>
                        <span className="text-rose-600 text-sm">
                            {rootError}
                        </span>

                        <p className="text-blue-500 mb-2 cursor-pointer hover:underline">
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