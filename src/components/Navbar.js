import React from "react";
// import {data } from '../data'
// import {addMovies } from '../actions'

class Navbar extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state ={
  //     showSearchResults : true
  //   };
  // }

  // handleAddToMovies = (movie)

  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input />
          <button id="search-btn">Search</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
