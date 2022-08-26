import Link from "next/link";
// import Logo from "../../public/logo.svg"
import Image from "next/image";

const Header = () => {

    return (
        <nav className="">
            <ul>
                <li className="logo">
                    <Link href="/">
                        <Image src="/logo.svg" width={80} height={80} />
                    </Link>
                </li>
                <li className="title">
                    <Link href="/">
                        Wiki Avatar
                    </Link>
                </li>

                <li className="title">
                    <Link href="/backoffice">
                        Backoffice
                    </Link>
                </li>

                <li className="title">
                    <Link href="/rendering">
                        Rendering
                    </Link>
                </li>

                <li className="title">
                    <Link href="/graphql">
                        GraphQL
                    </Link>
                </li>

                <li className="title">
                    <Link href="/todos">
                        Todo
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Header;