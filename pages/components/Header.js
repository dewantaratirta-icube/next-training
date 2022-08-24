import Link from "next/link";
// import Logo from "../../public/logo.svg"
import Image from "next/image";

const Header = () => {

    return (
        <nav className="">
            <ul>
                <li className="logo">
                    <Link href="/">
                        <Image src="/logo.svg" width={80} height={80}/>
                    </Link>
                </li>
                <li className="title">
                    <Link href="/">
                    Wiki Avatar
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;