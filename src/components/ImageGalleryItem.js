import { Component } from "react";
import Modal from "./Modal";
// import PropTypes from "prop-types";

// export const ImageGalleryItem = ({
//   item,
//   alt,
//   bigImg,
//   showModal,
//   toggleModal,
// }) => {
//   return (
//     <li className="ImageGalleryItem">
//       <img
//         onClick={toggleModal}
//         src={item}
//         alt={alt}
//         className="ImageGalleryItemImage"
//       />
//       {showModal && <Modal onClose={toggleModal} src={bigImg} alt={alt} />}
//     </li>
//   );
// };

// export default ImageGalleryItem;

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

// ImageGalleryItem.propTypes = {
//   key: PropTypes.number.isRequired,
//   item: PropTypes.object.isRequired,
// };
