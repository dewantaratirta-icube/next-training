import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CheckLogin() {
    const { isReady } = useRouter();
    const [role, setRole] = useState(null);

    const getCookies = () => {
        let x = parseCookies();
        if (x.hasOwnProperty('selectRole') == false) {
            setRole(null);
            return false;
        }
        setRole(x.selectRole);
        return x.selectRole
    }

    useEffect(() => {
        setInterval(() => { getCookies() }, 1000)
    }, [
        isReady
    ])

    return (
        <div className='container'>
            <div className='grid'>
                <div>
                    <h4 className='text-center'>Check Login</h4>
                    <p className='text-center'>Your current role is {role ? role : 'empty'}</p>
                </div>

                <div>
                    <h4 className='text-center'>Links</h4>
                    <Link href="/backoffice" >
                        <p className='text-center' style={{ display: 'block', width: '100%' }}>🔙 Back to Login page</p>
                    </Link>
                </div>
            </div>
        </div>
    );

}