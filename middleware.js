import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log(`middleware works`)
    let currentRole = req.cookies.get('selectRole');

    let acceptedRole = [
        'admin',
        'super-admin'
    ];

    const checkRoles = (x) => {
        if (!x) return false;

        let check = ((acceptedRole.find(el => el == x)) != undefined);
        return check
    }

    if (checkRoles(currentRole) == false) {
        return NextResponse.redirect(new URL('/backoffice', req.url))
    }
}

export const config = {
    matcher: '/backoffice/:path',
}