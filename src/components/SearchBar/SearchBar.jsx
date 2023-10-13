import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';

import {
  Header,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchSpan,
} from './SearchBar.styled';
export class SearchBar extends Component {
  state = {
    searchName: '',
    inputValue: '',
  };
  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchName.value.trim();
    this.props.onSubmit(searchQuery);
    event.target.reset();
  };
  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton>
            <FcSearch />
            <SearchSpan>Search</SearchSpan>
          </SearchButton>

          <SearchInput
            name="searchName"
            type="text"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
export default SearchBar;
