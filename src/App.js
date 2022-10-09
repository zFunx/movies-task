// Components
import MoviesMain from "./components/MoviesMain/Movie/MoviesMain";
import MoviePage from "./components/MoviePage/MoviePage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav class="navbar navbar-light bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Movies Task</a>
        </div>
      </nav>
      <div className="container py-5">
        <Routes>
          <Route exact path="/" element={<MoviesMain />} />
          <Route exact path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
