import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useSearchPage } from "../../hooks/useSearchPage";
import { Beer } from "../../API/interface";
import { FavoriteContext } from "../../API/FavoriteContext";
import "./BeerPage.css";

function BeerPage(): JSX.Element {
  const params = useParams();
  const beerId = params.beerId;

  const {
    beerList: [beer],
    loading,
    error,
  } = useSearchPage(`https://api.punkapi.com/v2/beers/${beerId}`);

  const [favorite, addToFavorite, removeFromFavorite, isFav] =
    useContext(FavoriteContext);
  console.log(favorite);

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
  // Hovering that icon leads to showing the tooltip which contains explanations on what it means.

  return (
    <div className="beer-details">
      {beer ? (
        <>
          <h1 className="beerP-name">{beer.name}</h1>
          <p className="beerP-tagline">{beer.tagline}</p>
          <button
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              isFav ? removeFromFavorite(beer.id) : addToFavorite(beer)
            }
            className="beerP-fav-btn"
          >
            {favorite.includes(beer)
              ? "Remove from Favorite"
              : "Add to Favorite"}
          </button>
          <img src={beer.image_url} alt="" className="beerP-img" />
          <p className="beerP-description">{beer.description}</p>
          <div className="beerP-propFoodP">
            <div className="beerP-prop">
              <h3 className="beerP-h3">Properties</h3>
              <ul className="beerP-properties">
                <li className="beerP-properties-row">
                  ABV <span className="beerP-properties-value">{beer.abv}</span>
                </li>
                <li className="beerP-properties-row">
                  IBU <span className="beerP-properties-value">{beer.ibu}</span>
                </li>
                <li className="beerP-properties-row">
                  EBC <span className="beerP-properties-value">{beer.ebc}</span>
                </li>
              </ul>
            </div>
            <div className="beerP-foodP">
              <h3 className="beerP-h3">Food Pairing</h3>
              <ul className="beerP-foods">
                {beer.food_pairing.map((foodPairing, index) => (
                  <li key={index} className="beerP-foods-value">
                    {foodPairing}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h2 className="beerP-brewing-header">Brewing</h2>
          <p className="beerP-brewing-text">{beer.brewers_tips}</p>
          <div className="beerP-ingredMeth">
            <div className="beerP-ingredients">
              <h3 className="beerP-h3">Ingredients</h3>
              <ul>
                <li className="beerP-ingredients-row">
                  <ul>
                    Malt
                    {beer.ingredients.malt.map((item, index) => (
                      <li key={index}>
                        "{item.name}" - {item.amount.value} {item.amount.unit}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="beerP-ingredients-row">
                  <ul>
                    Hops
                    {beer.ingredients.hops.map((item, index) => (
                      <li key={index}>
                        "{item.name}" - {item.amount.value} {item.amount.unit},
                        add when {item.add}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="beerP-ingredients-row">
                  <ul>
                    Yeast
                    <li>{beer.ingredients.yeast}</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="beerP-method">
              <h3 className="beerP-h3">Method</h3>
              <ul>
                <li className="beerP-method-row">
                  <ul>
                    Mash
                    {beer.method.mash_temp.map((item, index) => (
                      <li key={index}>
                        {item.duration
                          ? `${item.duration}  minutes at ${item.temp.value} ${item.temp.unit}`
                          : `Unknown duration at ${item.temp.value} ${item.temp.unit}`}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="beerP-method-row">
                  <ul>
                    Fermentation
                    <li>
                      Perform at {beer.method.fermentation.temp.value}{" "}
                      {beer.method.fermentation.temp.unit}
                    </li>
                  </ul>
                </li>
                <li className="beerP-method-row">
                  <ul>
                    Twist
                    {beer.method.twist ? (
                      <li> {beer.method.twist}</li>
                    ) : (
                      <li>Absent</li>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <Link to={isFav ? "/favorites" : "/"}>
            {/* {" draft solution "} */}
            <button className="beerP-back-btn">Back</button>{" "}
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default BeerPage;

// const getBeer = (number: number) => beerList.find((item: Beer) => item.id === number);
// let beer = getBeer(parseInt(params.beerId as string, 10));
