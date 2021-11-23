import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Favorites from "./components/Favorites";
import PageHeader from "./components/PageHeader";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <Router>
      <PageHeader />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
