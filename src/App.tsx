import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useModifyFavorites } from "./redux/hooks/useModifyFavorites";
import { FavoriteContext } from "./API/FavoriteContext";
import SearchPage from "./components/SearchPage";
import Favorites from "./components/Favorites";
import PageHeader from "./components/PageHeader";
import BeerPage from "./components/BeerPage";
import { FavoriteActionTypes } from "./redux/favoriteTypes";
import "./App.css";

function App(): JSX.Element {
  const { favorite, addToFavorite, removeFromFavorite, dispatch } =
    useModifyFavorites();

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const parsedFavorites = JSON.parse(favorites);
      for(let i = 0, il = parsedFavorites.length; i < il; ++i) {
        dispatch({
        type: FavoriteActionTypes.ADD_TO_FAVORITES,
        payload: parsedFavorites[i],
      });
      }
    }
  }, []);

  return (
    <>
      <FavoriteContext.Provider
        value={[favorite, addToFavorite, removeFromFavorite, dispatch]}
      >
        <Router>
          <PageHeader />
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="beerPage/:beerId" element={<BeerPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route
              path="*"
              element={
                <div style={{ padding: "1rem" }}>
                  <h1>Error 404: Not Found</h1>
                </div>
              }
            />
          </Routes>
        </Router>
      </FavoriteContext.Provider>
    </>
  );
}

export default App;
