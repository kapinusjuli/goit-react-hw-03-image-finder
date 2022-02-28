import { Component } from "react";
import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

export default class SearchBar extends Component {
  state = {
    searchQuery: "",
  };
  handleNameChange = (event) => {
    this.setState({
      searchQuery: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      return toast.error("введите запрос");
    }
    this.props.onSearch(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <FiSearch style={{ color: "black" }} />
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            onChange={this.handleNameChange}
          />
          <p>value={this.props.searchQuery}</p>
        </form>
      </header>
    );
  }
}
