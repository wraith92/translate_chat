import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

function UserAvatar({
    name,
    image,
    className,

} :{
    name: string
    image: string
    className?: string

}) {
  return (
    <Avatar className={cn("bg-white text-black",className)}>
        {
            image ? (
                <AvatarImage src={image} alt={name} />
            ) : (
                <AvatarFallback>{name}</AvatarFallback>
            )
        }
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>

  )
}

export default UserAvatar