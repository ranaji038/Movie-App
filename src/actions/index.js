// {
//   type: "ADD_MOVIES";
//   movies: [m1 , m2 , m3];
// }

//action types

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

//action creators

export default function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}
export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}
export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}
