import Link from 'next/link'

export default function FourOhFour() {
  return <div id="custom-404">
    <h1>500 - Something went wrong</h1>
    <Link href="/">
      <a>
        Go home, youre drunk
      </a>
    </Link>

    <style jsx>{`
        #custom-404{display:flex; flex-direction:column; align-content:center; justify-content:center; align-items:center;}
    `}</style>
  </div>
}