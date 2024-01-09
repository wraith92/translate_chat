import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

function UserAvatar({
    name,
    image,
    className,
}: {
    name?: string | null
    image?: string | null
    className?: string
}) {
    return (
        <Avatar className={cn("bg-white text-black", className)}>
            {
                image && (
                    <AvatarImage
                        src={image}
                        alt={name || "user avatar"}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                )
            }
            <AvatarFallback className="dark:bg-white dark:text-black text-lg">
                {name
                    ?.split(" ")
                    ?.map((n) => n[0])
                    ?.join("")
                }
            </AvatarFallback>
        </Avatar>

    )
}

export default UserAvatar