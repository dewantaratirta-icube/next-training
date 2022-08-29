import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

export default function Page() {
    const GET_CATEGORY = gql`
    {
        categories(filters: {}, pageSize: 20, currentPage: 1){
          items{
            name
                  uid
            id
            image
          }
        }
      }`;

    const { loading, error, data } = useQuery(GET_CATEGORY);

    if (loading) {
        return <div className="container"><p>Loading</p></div>
    }

    return (<div className="container">
        {
            data.categories.items.map(item => (
                <Link href={`graphql/category/${item.id}`}>
                    <a>
                        <article>
                            <h4>{item.name}</h4>
                        </article>
                    </a>
                </Link>
            ))
        }
    </div>)
}