import { useState } from "react"
import { useAuth } from "../store/AuthProvider"
import UserAction from "./UserAction"
import UserAvatar from "./UserAvatar"
import UserStatus from "./UserStatus"

function TableComponent({ data }: {
    data: Array<{
        imageUrl: string,
        name: string,
        id: number,
        date: string,
        role: string,
        status: string,
    }>
}) {


    const { setIsLoggedIn } = useAuth();
    const [page, setPage] = useState(1);

    return (
        <div className="h-[90%] w-full p-4 pt-14 relative flex flex-col justify-between">
            {/* <h1 className="text-2xl font-bold mb-4">User Information</h1> */}
            <button className="bg-red-500 p-2 rounded-lg text-white absolute top-1 right-1" onClick={() => {
                localStorage.setItem("token", "");
                localStorage.setItem("user", "");
                setIsLoggedIn(false);
            }}>Logout</button>
            <table className="w-full h-fit bg-white border space-y-7">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">#</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Date Created</th>
                        <th className="py-2 px-4 border-b">Role</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(page * 5 - 5, page * 5).map((user) => (
                        <tr key={user.id} className="text-center mb-auto">

                            <td className="mt-1 p-6 border-b">{user.id}</td>
                            <td className="mt-1 p-6 border-b">
                                <UserAvatar imageUrl={user.imageUrl} name={user.name} />
                            </td>
                            <td className="mt-1 p-6 border-b">{user.date}</td>
                            <td className="mt-1 p-6 border-b">{user.role}</td>
                            <td className="mt-1 p-6 border-b">
                                <UserStatus id={user.id} status={user.status} />
                            </td>
                            <td className="mt-1 p-6 border-b">{""}
                                <UserAction id={user.id} />
                            </td>


                        </tr>
                    ))}

                </tbody>
            </table>

            <div className="mt-4 text-end space-x-3">
                <span onClick={() => {
                    if (page > 1) {
                        setPage(page - 1);
                    }
                }} className={`p-2  text-zinc-500 cursor-pointer ${page == 1 ? "hidden" : ""}`}>
                    {"Previous"}
                </span>

                {
                    [...Array(Math.ceil(data.length / 5))].map((_, index) => {
                        return <span onClick={() => setPage(index + 1)} className={`p-3  hover:text-white hover:bg-blue-400 ${index + 1 === page ? "bg-blue-600 text-white" : ""}`}>
                            {index + 1}
                        </span>
                    })
                }

                <span onClick={() => {
                    if (page < (Math.ceil(data.length / 5))) {
                        setPage(page + 1);
                    }
                }}
                    className={`p-2 text-zinc-500 cursor-pointer ${page == Math.ceil(data.length / 5) ? "hidden" : ""}`}>
                    {"Next"}
                </span>

            </div>

        </div >
    )
}

export default TableComponent