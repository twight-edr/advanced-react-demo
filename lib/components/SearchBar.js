import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };
  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300)
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  }
  // Pure component does the same as using shouldComponentUpdate to compare nextProps to current props and
  // nextState with current state and returning false if they are the same
  // shouldComponentUpdate(nextProps, nextState) {
  // if (nextProps === props && nextState === state ) {
  // return false;
  // }
  // }

  // the following hook is deprecated
  // componentWillUpdate(nextProps, nextState) {
  //   console.log(`Updating`);
  // }
  render() {
    return (
      <input
        type="search"
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    );
  }
}

export default storeProvider()(SearchBar);
