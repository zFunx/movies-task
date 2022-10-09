import {useState} from 'react'

// Components
import MoviesMain from "./components/MoviesMain/MoviesMain";
import MoviePage from "./components/MoviePage/MoviePage";
import Navbar from "./components/Navbar/Navbar";

// Context
import AppContext from "./context/AppContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [selectedYr, setSelectedYr] = useState(null)

  return (
    <AppContext.Provider
      value={{
        selectedYr,
        setSelectedYr
      }}
    >
    <Router>
      <Navbar />
      <div className="container py-5">
        <Routes>
          <Route exact path="/" element={<MoviesMain />} />
          <Route exact path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
