import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

export default function SubscribeEmail() {

    const QUERY = gql`
    mutation SubscribeEmail($useremail: String!){
        subscribe(input: {
            email: $useremail
        }) {
            status {
                code
                message
                response
            }
        }
    }
    `;

    const [submitSubscription, { data, loading, error }] = useMutation(QUERY);

    const changeColor = (string) => {
        return (string.toLocaleLowerCase() == 'failed') ? "red" : "green";
    }

    const submitHandler = async(ev) => {
        console.log('submitting')
        let { target: form } = ev;
        let email = form.querySelector('#email').value;
        submitSubscription({ variables: { useremail: email } })
    }


    return (
        <div>
            <h5>Subscribe</h5>
            {
                !data ?
                    <></>
                :
                    <p style={{color: changeColor(data.subscribe.status.response)}}>{data.subscribe.status.message}</p>
            }
            <form onSubmit={(ev) => {ev.preventDefault(); submitHandler(ev)}}>
                <label >Email address</label>
                <input type="email" id="email" name="email" placeholder="Email address" required />
                <small>We'll never share your email with anyone else.</small>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}