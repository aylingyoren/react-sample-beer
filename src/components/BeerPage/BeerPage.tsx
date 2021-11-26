import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSearchBeers } from '../../hooks/useSearchPage';
import { Beer } from '../../API/interface';
import './BeerPage.css';

function BeerPage(): JSX.Element {

    const params = useParams();
    const beerId = params.beerId;

    const { beerList: [beer], loading, error } = useSearchBeers(
        `https://api.punkapi.com/v2/beers/${beerId}`
    );

    if (loading) {
        return <div> Loading... </div>;
      }
    
    if (error) {
        console.log("Error occured fetching data!");
        return <div> Error occured </div>;
    }

    // Properties is beer's properties section. 
    // It shows only ABV, IBU and EBC. 
    // Every acronym has an info icon near. 
    // Hovering that icon leads to showing the tooltip which contains explanations on what does it mean.
    
    return (
        <div className="beer-details">
           { beer ? 
           <>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <button className="add-fav-btn">Add to Favorite</button>
            <img src={beer.image_url} alt="" className="beer-img" />
            <p>{beer.description}</p>
            <h2>Properties</h2>
            <ul>
                <li>ABV {beer.abv}</li>
                <li>IBU {beer.ibu}</li>
                <li>EBC {beer.ebc}</li>
            </ul>
            <h2>Food Pairing</h2>
            <ul>
                {beer.food_pairing.map((foodPairing, index) =>
                    <li key={index}>{foodPairing}</li>
                )}
            </ul>
            <h2>Brewing</h2>
            <p>{beer.brewers_tips}</p>
            <h2>Ingredients</h2>
            <ul>
                <li>
                    <ul>Malt
                        {beer.ingredients.malt.map((item, index) => 
                            <li key={index}>"{item.name}" - {item.amount.value} {item.amount.unit}</li>)}
                    </ul>
                </li>
                <li>
                    <ul>Hops
                        {beer.ingredients.hops.map((item, index) => 
                            <li key={index}>"{item.name}" - {item.amount.value} {item.amount.unit}, add when {item.add}</li>)}
                    </ul>
                </li>
                <li>Yeast {beer.ingredients.yeast}</li>
            </ul>
            <h2>Method</h2>
            <ul>
                <li>
                    <ul>Mash
                        {beer.method.mash_temp.map((item, index) => 
                            <li key={index}>{item.duration ? 
                                `${item.duration}  minutes at ${item.temp.value} ${item.temp.unit}` : 
                                `Unknown duration at ${item.temp.value} ${item.temp.unit}`}</li>)}
                    </ul>
                </li>
                <li>
                    <ul>Fermentation
                        <li>Perform at {beer.method.fermentation.temp.value} {beer.method.fermentation.temp.unit}</li>
                    </ul>
                </li>
                <li>
                    <ul>Twist 
                        {beer.method.twist ? <li> {beer.method.twist}</li> : <li>Absent</li>}
                    </ul>
                </li>
            </ul>
                <Link to='/'> <button>Back</button> </Link>
            </> : null}
        </div>
    );
}

export default BeerPage;

   // const getBeer = (number: number) => beerList.find((item: Beer) => item.id === number);
    // let beer = getBeer(parseInt(params.beerId as string, 10));