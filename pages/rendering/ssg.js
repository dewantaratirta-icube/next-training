import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;

    let data = await fetch(apiUrl);
    let res = await data.json();

    let m = res.meals[0];

    console.log(m);

    // get ingredients
    let add = { ingredients: [], measure: [] }
    Object.keys(m).forEach((key) => {
        if (key.search('strIngredient') == 0) {
            add.ingredients.push(m[key]);
        }
        if (key.search('strMeasure') == 0) {
            add.measure.push(m[key]);
        }
    });
    m = { ...m, ...add };

    return {
        props: { meal: m },
    };
};


export default function Page({ meal }) {
    return (
        <div>
            <div className="container">
                <h4 className="text-center">Load data using SSG</h4>
                <Link href="/rendering"><div className="text-center">🔙 Back to list</div></Link>
                <ul>
                    {
                        !meal ?
                            <div>Loading</div>
                            :
                            <article >
                                <Head>
                                    <title>{meal.strMeal}</title>
                                </Head>
                                <div className="grid">
                                    <div>
                                        <h1>{meal.strMeal}</h1>
                                        <p>
                                            Category : {meal.strCategory} <br />
                                            Tags : {meal.strTags} <br />
                                            <br />
                                        </p>
                                        {
                                            meal.ingredients.length == 0 ? <></>
                                                : meal.ingredients.map((i, v) => (

                                                    (meal.ingredients[v] !== '' && meal.ingredients[v] !== null) ? <li>{meal.ingredients[v]} {meal.measure[v]}</li> : ''
                                                ))
                                        }
                                    </div>
                                    <div className="image-holder">
                                        <Image src={meal.strMealThumb} width={333} height={250} layout="responsive" />
                                    </div>
                                </div>
                            </article>
                    }
                </ul>
            </div>
        </div>
    );
}