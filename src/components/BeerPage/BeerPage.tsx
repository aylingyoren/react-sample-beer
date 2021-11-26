import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSearchBeers } from '../../hooks/useSearchPage';
import { Beer } from '../../API/interface';
import './BeerPage.css';

function BeerPage(): JSX.Element {

    const params = useParams();
    const beerId = params.beerId;

    // const beerList: never[]
    const { beerList: [beer], loading, error } = useSearchBeers(
        `https://api.punkapi.com/v2/beers/${beerId}`
    );

    // if(beer) {console.log(beer)}

    // console.log(beer);

    if (loading) {
        return <div> Loading... </div>;
      }
    
    if (error) {
        console.log("Error occured fetching data!");
        return <div> Error occured </div>;
    }
    
    return (
        <div className="beer-details">
           { beer ? 
           <>
           <h1>{beer.name}</h1>
           <p>{beer.tagline}</p>
           <button>Add to Favorite</button>
            <Link to='/'> <button>Back</button> </Link>
            </> : null}
        </div>
    );
}

export default BeerPage;

   // const getBeer = (number: number) => beerList.find((item: Beer) => item.id === number);
    // let beer = getBeer(parseInt(params.beerId as string, 10));