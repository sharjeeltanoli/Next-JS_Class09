import Image from "next/image"
import Logo from "/public/PenaverseLogo.png"
import Link from "next/link"
const Navbar = () => {
  return (
<header className="flex justify-between max-w-screen-xl mx-auto h-auto sticky top-0 px-4 py-4 items-center bg-white">
    <div className="flex h-16 w-16">
        <Image src={Logo} alt="Penaverse Logo"></Image>
        <h3 className="font-bold ">Penaverse DAO</h3>
    </div>
    <ul className="flex space-x-4">
        <li>
            <Link href="/"> Home </Link>
        </li>
        <Link href="/Courses"> Courses </Link>
    </ul>
</header>
  )
}

export default Navbar