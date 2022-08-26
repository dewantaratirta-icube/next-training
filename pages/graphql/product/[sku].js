import { useRouter } from "next/router";
import { gql, useQuery } from '@apollo/client';
import SubscribeEmail from "/components/SubscribeEmail";


function Pdp() {
    const router = useRouter();
    const sku = router.query.sku;

    const QUERY = gql`
    query getProduct($sku: String) {
        products(
          filter: {
            sku: { in: [$sku] }
          }
        ) {
          items{
            sku
            name
            description{
                html
            }
            media_gallery{
                url
            }
            price_range{
              maximum_price{
                final_price{
                  currency
                  value
                }
              }
            }
          }
        }
      }`;

    const response = useQuery(QUERY, {
        variables: { sku: sku },
    });
    const { data, loading, error } = response;

    if (loading) return (<div className="container"><p>Loading...</p></div>)
    if (error) return (<div className="container"><p>Something went wrong</p></div>)

    console.log(data);

    return (
        <div className="container">
            <h1>{sku}</h1>
            <div className="grid">
                {
                    data.products.items.map((value) => (
                        // JSON.stringify(value)
                        <div key={value.sku}>
                            <h4>{value.name}</h4>
                            <p>
                                SKU: {value.sku}<br />
                                Price: {value.price_range.maximum_price.final_price.currency} {value.price_range.maximum_price.final_price.value}
                            </p>

                            <div dangerouslySetInnerHTML={{ __html: value.description.html }}></div>

                            {/* <pre>{JSON.stringify(value)}</pre> */}
                            <div className="imageHolder">
                                {
                                    data.products.items.map((value, index) => (
                                        value.media_gallery.map(gallery => (
                                            <img src={gallery.url} key={'image--'+index} />
                                        ))
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

                {/* Right  */}
                <div>
                    <SubscribeEmail />
                </div>

            </div>

            <style jsx>{`
                .imageHolder{display:flex;width: 100%;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-content: center;
                    justify-content: center;
                    align-items: center;}
            `}</style>
        </div>
    )
}

export default Pdp;