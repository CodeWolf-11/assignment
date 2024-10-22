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

    return (
        <div className="h-full w-full p-4 pt-14 relative">
            {/* <h1 className="text-2xl font-bold mb-4">User Information</h1> */}
            <button className="bg-red-500 p-2 rounded-lg text-white absolute top-1 right-1" onClick={() => {
                localStorage.setItem("token", "");
                localStorage.setItem("user", "");
                setIsLoggedIn(false);
            }}>Logout</button>
            <table className="w-full h-full bg-white border">
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
                    {data.map((user) => (
                        <tr key={user.id} className="text-center">
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">
                                <UserAvatar imageUrl={user.imageUrl} name={user.name} />
                            </td>
                            <td className="py-2 px-4 border-b">{user.date}</td>
                            <td className="py-2 px-4 border-b">{user.role}</td>
                            <td className="py-2 px-4 border-b">
                                <UserStatus id={user.id} status={user.status} />
                            </td>
                            <td className="py-2 px-4 border-b">{""}
                                <UserAction id={user.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent