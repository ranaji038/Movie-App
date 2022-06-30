import React from "react";
import { data } from "../data";
// import { addMovies } from "../actions";
import ADD_MOVIES, { setShowFavourites } from "../actions";

import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
class App extends React.Component {
  componentDidMount() {
    //make an api call
    //dispatch action
    const { store } = this.props;

    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });

    store.dispatch({
      type: ADD_MOVIES,
      movies: data,
    });

    console.log("state", store.getState());
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if (index !== -1) {
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const { list, favourites, showFavourites } = this.props.store.getState(); // { list ; [] , fav : []}
    console.log("Render", this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? " " : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : " "}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>

          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies to Display !!! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
