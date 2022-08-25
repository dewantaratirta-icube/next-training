import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const apiUrl = 'http://localhost:3000/api/avatar';

const DynamicHello = dynamic(() => import('@/components/Hello'), {
  loading: () => <p>Loading the module</p>,
});

export default function Home() {
  const [chars, setChar] = useState([]);
  const [btnClick, setBtnClick] = useState(false);

  const btnHandler = () =>{
    setBtnClick(!btnClick);
  }

  const fetchData = async () => {
    let data = await fetch(apiUrl);
    let result = await data.json();
    setChar(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container">
      <Head>
        <title>My first Next App</title>
      </Head>

      <button onClick={btnHandler}>{btnClick ? 'Loaded' : 'Click to Load'}</button>
      { btnClick ?  <DynamicHello /> : <p>Nothing to display</p> }

      <h1>Featured Character</h1>
      <div className='container card-container'>
        {

          (chars.length == 0) ?
            <p>Loading ...</p>
            :
            (
              chars.map((d, i) => (
                <Link href={"/character/" + d._id} key={d._id}>
                  <article className='cursor-pointer' style={{ backgroundImage: `url(${d.photoUrl})` }}>
                    <div className='image-holder'>
                      {/* <Image src={d.photoUrl} width={80} height={80} layout="fill" /> */}
                    </div>
                    <h4>{d.name}</h4>
                  </article>
                </Link>
              ))
            )

        }
      </div>

      <style jsx>{`
        .card-container{ display:flex;flex-direction: row;justify-content: center;flex-wrap: wrap;}
        article {display:block; width:30%; height:20vh;padding:0px;position:relative;background-repeat:no-repeat;background-size:cover;background-position:center center;margin:10px;}
        article .image-holder{width:80px; height:80px;}
        article h4{opacity:0;position: absolute;bottom: 0px;width:100%; margin-bottom:0px;text-align:center;background:#000;transition:all .8s}
        article:hover h4{opacity:100}
      `}</style>
    </main>
  )
}
