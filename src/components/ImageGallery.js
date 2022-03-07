import React from "react";
// import PropTypes from ‘prop-types’;
import "../components/styles.css";
import ImageGalleryItem from "./ImageGalleryItem";
const ImageGallery = ({ items, onImgClick }) => {
  return (
    <ul className="ImageGallery">
      {items.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          image={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onModal={onImgClick}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;

//---------------------------------------------------------
// import "../components/styles.css";
// import ImageGalleryItem from "./ImageGalleryItem";
// // import PropTypes from "prop-types";

// export const ImageGallery = ({ items }) => {
//   return (
//     <div>
//       <ul className="ImageGallery">
//         {items.map((img) => (
//           <ImageGalleryItem
//             key={img.id}
//             item={img.webformatURL}
//             alt={img.tags}
//             bigImg={img.largeImageURL}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ImageGallery;

// // ImageGallery.propTypes = {
// //   key: PropTypes.number.isRequired,
// //   item: PropTypes.object.isRequired,
// // };

// // idle
// // pending
// // resolved
// // rejected
