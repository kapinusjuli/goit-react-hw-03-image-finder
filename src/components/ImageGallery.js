import { Component } from "react";
import "../components/styles.css";

{
  /* <ul class="gallery">
  <!-- Набор <li> с изображениями -->
</ul> */
}

export default class ImageGallery extends Component {
  state = {
    searchQuery: "",
    error: null,
    status: "idle",
    q: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log(prevProps.searchQuery);
      console.log(this.props.searchQuery);
      this.setState({ status: "pending" });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=19196344-39ec0398b9669a2b5bdda7f21&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json().then(console.log);
          }
          return Promise.reject(
            new Error(`изображений ${this.props.searchQuery} не найдено`)
          );
        })
        .then((q) => this.setState({ q: q[0], status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }
  render() {
    const { q, error, status } = this.state;

    if (status === "idle") {
      return <div>ВВедите имя покемона</div>;
    }
    if (status === "pending") {
      return <div>загружаем</div>;
    }
    if (status === "rejected") {
      return <h1>{error.message}</h1>;
    }

    if (status === "resolved") {
      return (
        <ul className="gallery">
          <li>
            <p>{this.props.searchQuery}</p>
            {/* <img src={q.hits.webformatURL[0]} alt={q.hits.id[0]} width="240" /> */}
          </li>
        </ul>
      );
    }
  }
}

// idle
// pending
// resolved
// rejected
