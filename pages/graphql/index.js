import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';


function Page() {

    const GET_CATEGORY_BY_ID = gql`
            query getCategoryById($categoryId: Int) {
                category(id: $categoryId) {
                    id
                    name
                    products {
                        items {
                            id
                            uid
                            sku
                            name
                            media_gallery {
                                url
                              }
                        }
                    }
                }
            }`;

    const { loading, error, data } = useQuery(GET_CATEGORY_BY_ID);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data);

    return (
        <div className="container">
            <h1>GraphQL</h1>
            {
                data.category.products.items.map((value) => (
                    // JSON.stringify(value)
                    <Link href={`/graphql/product/${value.sku}`}>
                        <a>
                            <h4>{value.name}</h4>

                            {
                                value.media_gallery.length == 0 ?
                                    <></>
                                    :
                                    <div className='images'>
                                        {

                                            value.media_gallery.map((images) => (

                                                <Image src={images.url} width={80} height={200} layout="fill" />

                                            ))
                                        }
                                    </div>
                            }

                        </a>
                    </Link>
                ))
            }

            <style jsx>{`
            div.images{position:relative;width:80px;height:200px; display:flex}
            `}</style>
        </div>
    );
}

export default Page;