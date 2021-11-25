import React from 'react';
import { useParams } from 'react-router-dom';
import { useSearchBeers } from '../../hooks/useSearchPage';
import { Beer } from '../../interface';
import './BeerPage.css';

function BeerPage(): JSX.Element {

    const params = useParams();
    const beerId = params.beerId;

    // const beerList: never[]
    const { beerList, loading, error } = useSearchBeers(
        `https://api.punkapi.com/v2/beers/${beerId}`
    );

    console.log(beerList);

    if (loading) {
        return <div> Loading... </div>;
      }
    
    if (error) {
        console.log("Error occured fetching data!");
        return <div> Error occured </div>;
    }
    
    return (
        <div className="beer-details">
            <h1>Worked and the beer name is {beerList.map((item: Beer) => item.id)}</h1>
        </div>
    );
}

export default BeerPage;

   // const getBeer = (number: number) => beerList.find((item: Beer) => item.id === number);
    // let beer = getBeer(parseInt(params.beerId as string, 10));