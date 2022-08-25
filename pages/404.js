import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function FourOhFour() {

    const { push, isReady } = useRouter();

    const doRedirect = () => {
        console.log('do this');
        setTimeout( ()=>{
            push('/');
        }, 2000);
    }

    useEffect( () =>{
        doRedirect();
    }, [isReady] )

    return <div id="custom-404">
        <h1>404 - Not Found</h1>
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