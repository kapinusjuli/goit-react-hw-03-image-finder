import { Component } from "react";
import Modal from "./Modal";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { item, alt, bigImg } = this.props;
    const { showModal } = this.state;
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.toggleModal}
          src={item}
          alt={alt}
          className="ImageGalleryItemImage"
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={bigImg} alt={alt} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
