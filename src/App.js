import { Component } from "react";
// import { FiSearch } from "react-icons/fi";

import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/Searchbar";
import GetImages from "./services/ImageAPI";
// import { Button, Progress } from "./components/Button";
import "./components/styles.css";

export default class App extends Component {
  state = {
    searchQuery: "",
    error: null,
    status: "idle",
    index: 0,
    items: [],
    isLoading: false,
  };

  handleFormSubmit = (searchQuery) => {
    return this.setState({ searchQuery });
  };

  ChangeIndex = (value) => {
    this.setState((state) => ({ index: state.index + value }));
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const items = await GetImages();
      this.setState({ isLoading: false });
      this.setState({ items: items });

      console.log(items);
    } catch (error) {
      // console.log(error);
    }
  }

  render() {
    const { items } = this.state;
    // const totalItems = items.length;
    // const currentItem = items[index];
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <Toaster />

        {/* {!isLoading && totalItems === 0 && <div>Еще нет картинок</div>} */}

        {/* <Button
          current={index + 1}
          total={totalItems}
          onChange={this.ChangeIndex}
        />
        {totalItems > 0 && <Progress current={index + 1} total={totalItems} />} */}

        <ImageGallery items={items} />
      </div>
    );
  }
}
