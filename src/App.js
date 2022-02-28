import { Component } from "react";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/Searchbar";
import GetImages from "./services/ImageAPI";
import Load from "./components/Loader";
import Button from "./components/Button";
import "./components/styles.css";

export default class App extends Component {
  state = {
    searchQuery: null,
    error: false,
    status: "idle",
    page: 1,
    items: [],
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ status: "pending" });
      this.fetchImages();
    }
    if (
      this.state.items.length === 0 &&
      prevState.items.length !== this.state.items
    ) {
      new Error(
        `${this.state.searchQuery} not found, please enter a new search`
      );
    }

    if (prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  onSearch = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      items: [],
      error: false,
      status: "pending",
    });
  };

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const data = await GetImages({ searchQuery, page });
      this.setState((prevState) => ({
        items: [...prevState.items, ...data],
        status: "resolved",
      }));
    } catch (error) {
      this.setState({ status: "rejected" });
      return Promise.reject(new Error("Something wrong ... refresh search"));
    }
  };
  loadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { items, status, error, showModal } = this.state;

    <SearchBar onSearch={this.onSearch} />;
    if (status === "idle") {
      return <SearchBar onSearch={this.onSearch} />;
    }
    if (status === "pending") {
      return <Load />;
    }
    if (status === "rejected") {
      <p>{error.message}</p>;
    }
    if (status === "resolved") {
      return (
        <div>
          <SearchBar onSearch={this.onSearch} />
          <ImageGallery items={items} onClose={showModal} />
          <Toaster />

          <Button onHandleClick={this.loadMore} />
        </div>
      );
    }
  }
}
