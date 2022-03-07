import React from "react";
// import PropTypes from "prop-types";
import "../components/styles.css";

const ImageGalleryItem = ({ image, tags, onModal, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image}
        alt={tags}
        onClick={() => onModal(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;

//---------------------------------------------------------

// import { Component } from "react";
// import Modal from "./Modal";

// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

// toggleModal = () => {
//   this.setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
// };

//   render() {
//     const { item, alt, bigImg } = this.props;
//     const { showModal } = this.state;
//     return (
//       <li className="ImageGalleryItem">
//         <img
//           onClick={this.toggleModal}
//           src={item}
//           alt={alt}
//           className="ImageGalleryItemImage"
//         />
//         {showModal && (
//           <Modal onClose={this.toggleModal} src={bigImg} alt={alt} />
//         )}
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;

// // ImageGalleryItem.propTypes = {
// //   key: PropTypes.number.isRequired,
// //   item: PropTypes.object.isRequired,
// // };
