import Link from "next/link"
import { usePathname } from "next/navigation"


const MenuLink = ({item}:{item:any}) => {
    const pathName = usePathname

    return (
        <Link href={item.path} className={item.styles} >
            {item.title}
        </Link>
    )

}

export default MenuLink