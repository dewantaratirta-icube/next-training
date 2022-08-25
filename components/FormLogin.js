import { useState } from "react";
import nookies from 'nookies';
import Link from "next/link";
import { useRouter } from "next/router";

export default function FormLogin() {

    const [selectdata, setSelectdata] = useState('admin');
    const {push} = useRouter();

    const submitHandler = (ev) => {
        ev.preventDefault();
        let value = document.querySelector('#login').value;
        nookies.set(null, 'selectRole', value, {path: '/'});
        nookies.set(null, 'selectRole', value, {path: '/backoffice'});
        push('/backoffice/superadmin');
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                Select Role
                <select id="login" >
                    <option value="rakyat">Rakyat Byasa</option>
                    <option value="admin">Admin</option>
                    <option value="super-admin">Super Admin</option>
                </select>
            </label>

            <label>
                <button>LOGIN</button>
            </label>
        </form>
    )
}