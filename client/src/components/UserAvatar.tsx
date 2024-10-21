function userAvatar({ imageUrl, name }: { imageUrl?: string, name: string }) {


    if (imageUrl) {
        return (
            <div className="flex items-center gap-x-2 justify-center">
                <div className="min-w-[150px] flex justify-start gap-2 items-center">
                    <img src={imageUrl} alt={name} className="h-8 w-8 object-cover rounded-full" />
                    <span className="min-w-[50px] ">{name}</span>
                </div>

            </div>

        )
    }

    return (
        <div className="flex items-center gap-x-2 justify-center">
            <div className="bg-red-200 p-2 rounded-full">
                <span>{name?.[0] + name.split(" ")[1][0]}</span>
            </div>
            <span>{name}</span>
        </div>

    )


}

export default userAvatar