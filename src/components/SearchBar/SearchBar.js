import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  BestMatch: 'best_match',
  HighestRated: 'rating',
  MostReviewed: 'review_count'
}

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
      });
  }
  render() {
    return (
      <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
        {this.renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a>Let s Go</a>
        // jai enlevé lappostrophe avant le s parce que bug
      </div>
      </div>
    );
  }
}

export default SearchBar;
