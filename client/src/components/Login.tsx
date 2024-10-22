import Password from "../icons/Password"
import User from "../icons/User"
import Image from "../assets/image.png";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { LOGIN_URL } from "../lib/ApiEndpoints";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [rootError, setRootError] = useState("");
    const { setIsLoggedIn } = useAuth();
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const onSubmit = async (e: FormEvent) => {
        try {

            setIsLoading(true);
            e.preventDefault();

            const res = await axios.post(LOGIN_URL, {
                email,
                password
            });

            setEmail("");
            setPassword("");
            setRootError("");
            setErrors({
                email: "",
                password: ""
            });
            setIsLoading(false);
            localStorage.setItem("token", res?.data?.token);
            localStorage.setItem("user", JSON.stringify(res?.data?.data));
            setIsLoggedIn(true);
            navigate("/");

        } catch (error) {
            setIsLoading(false);
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    setErrors(error.response.data?.errors)
                    return;
                }

                setRootError(error.response?.data.message);
                setErrors({
                    email: "",
                    password: ""
                });
            }

        }
    }
    return (
        <div className="h-full w-full flex items-center justify-center">

            <form onSubmit={onSubmit} action="" className="w-[375px] min-h-[375px] bg-slate-800 rounded-lg relative">
                <div className=" w-full bg-slate-900 flex justify-center items-center">
                    <h1 className="bg-blue-600 w-[10rem] text-center text-2xl font-bold rounded-lg p-1 absolute -top-7 left-1/2 -translate-x-1/2">Login</h1>
                    <img src={Image} alt="User" className="h-20 w-20 object-contain relative top-6 " />
                </div>
                <div className="w-full px-10 text-gray-800 mt-14">

                    <div className="mt-2 w-full flex flex-col items-center gap-2">
                        <div className="w-full flex bg-slate-500 p-2 rounded-lg gap-2 items-center">
                            <User />
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-500 font-medium border-l-2 border-slate-400 px-2 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none" placeholder="Enter username" />
                        </div>
                        <span className="text-rose-600 text-start w-full text-xs">
                            {errors.email}
                        </span>

                        <div className="w-full flex bg-slate-500 p-2 rounded-lg gap-2 items-center">
                            <Password />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-slate-500 font-medium border-l-2 border-slate-400 px-2 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none" placeholder="Enter password" />
                        </div>
                        <span className="text-rose-600 w-full text-start text-xs">
                            {errors.password}
                        </span>
                        <span className="text-end ml-auto text-blue-700 hover:underline cursor-pointer">
                            Forget password ?
                        </span>

                        <button disabled={isLoading} className="rounded-lg w-full p-2 text-xl font-medium  bg-blue-600 ">
                            {isLoading ? "Processing..." : "Login"}
                        </button>
                        <span className="text-rose-600 text-xs">
                            {rootError}
                        </span>

                        <p className="text-blue-500 mb-4 cursor-pointer hover:underline">
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