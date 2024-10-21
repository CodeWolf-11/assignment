
function UserStatus({ id, status }: { id: number, status: string }) {

    if (status === "Active") {

        return (
            <div className="flex gap-x-2 items-center justify-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>{status}</span>
            </div>
        )
    }

    if (status === "Suspended") {
        return <div className="flex gap-x-2 items-center justify-center">
            <div className="w-2 h-2 bg-rose-500 rounded-full" />
            <span>{status}</span>
        </div>
    }

    return (
        <div className="flex gap-x-2 items-center justify-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span>{status}</span>
        </div>
    )
}

export default UserStatus