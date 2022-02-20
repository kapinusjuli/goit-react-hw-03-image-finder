// import { Component } from "react";
import "../components/styles.css";
import { ImageGalleryItem } from "../components/ImageGalleryItem";

export const ImageGallery = ({ items }) => {
  //   return (
  //     <ul className ImageGallery>
  //       <li className="gallery-item">
  //         <img
  //           // key={idx}
  //           src={item.webformatURL}
  //           alt={item.tags}
  //           // onClick={() => openModal({ largeImageURL, tags })}
  //         />
  //       </li>
  //     </ul>
  //   );
  // };

  return (
    <div>
      <ul className ImageGallery>
        {items.map(({ img }) => (
          <ImageGalleryItem
            key={img.id}
            src={img.webformatURL}
            alt={img.tags}
            // onClick={() => openModal({ largeImageURL, tags })}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
// idle
// pending
// resolved
// rejected

//   render() {
//     const { error, status } = this.state;
//     // const image = this.state.data[0];
//     // console.log(image);

//     if (status === "idle") {
//       return <div>ВВедите имя покемона</div>;
//     }
//     if (status === "pending") {
//       return <div>загружаем</div>;
//     }
//     if (status === "rejected") {
//       return <h1>{error.message}</h1>;
//     }

//     if (status === "resolved") {
//       return (
//         <ul className="gallery">
//           <li>
//             <p>{this.state.data.tags}</p>
//             <img src={this.data.hits[0]} alt="alt" />
//           </li>
//         </ul>
//       );
//     }
//   }
// }

// idle
// pending
// resolved
// rejected
