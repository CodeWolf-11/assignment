import Cancel from "../icons/Cancel"
import Setting from "../icons/Setting"

function UserAction({ id }: { id: number }) {
    return (
        <div className="flex gap-x-3 items-center justify-center">
            <span className="cursor-pointer">
                <Setting />
            </span>

            <span className="cursor-pointer">
                <Cancel />
            </span>

        </div>
    )
}

export default UserAction