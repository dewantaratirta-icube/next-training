import Head from 'next/head'
import Image from 'next/image'
import data from '../../public/data';
import { useRouter } from "next/router"
import Style from './character.module.css';
import { useEffect, useState } from 'react';
import datajson from "../../public/data.json";
// import Link from 'next/link';

const apiUrl = '/api/avatar/';

export default function Home() {
    const { query, isReady } = useRouter();
    var id = query.id;

    const [character, setCharacter] = useState(null);

    const fetchData = async () => {
        // let data = await fetch(apiUrl + id, { mode: 'cors' });
        // let result = await data.json();
        // datajson;
        let result = datajson.find( el => el._id == id);

        // count++;
        if (result.hasOwnProperty('error')) {
            setCharacter(null);
        } else {
            setCharacter(result);
        }
    }


    useEffect(() => {
        if (isReady) {
            fetchData();
        }
    }, [isReady]);


    return (
        <main className="container">
            <a href="#" onClick={(ev) => { ev.preventDefault(); window.history.back() }} className={Style.link}>
                ⬅️ Go back
            </a>

            {
                (character == null)
                    ?
                    <p>Loading...</p>
                    :
                    // <p>{ JSON.stringify(character) }</p>
                    <article className={Style.card}>
                        <Head>
                            <title>{character.name} - Character</title>
                        </Head>
                        <div className="grid">
                            <div>
                                <h1>{character.name}</h1>
                                <p>
                                    Gender: {character.gender} <br />
                                    Poisition: {character.position} <br />
                                    Profession: {character.profession} <br />
                                    <br />
                                </p>
                            </div>
                            <div className="image-holder">
                                <Image src={character.photoUrl} width={333} height={250} layout="responsive" />
                            </div>
                            {/* <img src={character.photoUrl} /> */}
                        </div>
                    </article>
            }
        </main>
    )
}
