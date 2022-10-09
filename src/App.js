// Components
import MoviesMain from "./components/MoviesMain/Movie/MoviesMain";

function App() {
  return (
    <>
      <nav class="navbar navbar-light bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Movies Task</a>
        </div>
      </nav>
      <div className="container py-5">
        <MoviesMain />
      </div>
    </>
  );
}

export default App;
