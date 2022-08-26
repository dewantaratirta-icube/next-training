import Link from "next/link"

export default function Page() {

    return (
        <div className="container">
            <h1 className="text-center">List Rendering</h1>

            <article>
                <Link href="/rendering/csr"><button>CSR ⭐</button></Link>
                <Link href="/rendering/ssr"><button>SSR 🔥</button></Link>
                <Link href="/rendering/isr"><button>ISR 💧</button></Link>
                <Link href="/rendering/ssg"><button>SSG ⚡</button></Link>
            </article>

        </div>
    )
}