import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useModifyFavorites } from "./hooks/useModifyFavorites";
import SearchPage from "./components/SearchPage";
import Favorites from "./components/Favorites";
import PageHeader from "./components/PageHeader";
import BeerPage from "./components/BeerPage";
import "./App.css";

function App(): JSX.Element {
  const {
    isFav,
    favorite,
    addToFavorite,
    removeFromFavorite,
    FavoriteContext
  } = useModifyFavorites();

  return (
    <>
      <FavoriteContext.Provider value={favorite}>
        <Router>
        <PageHeader />
          <Routes>
            <Route path="/" element={<SearchPage />}/>
            <Route path="beerPage/:beerId" element={<BeerPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={
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
