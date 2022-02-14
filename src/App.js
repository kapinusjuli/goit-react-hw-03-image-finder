import { Component } from "react";
// import { FiSearch } from "react-icons/fi";

import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/Searchbar";
import "./components/styles.css";

export default class App extends Component {
  state = {
    searchQuery: "",
    error: null,
    status: "idle",
  };

  handleFormSubmit = (searchQuery) => {
    return this.setState({ searchQuery });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <Toaster />
      </div>
    );
  }
}
