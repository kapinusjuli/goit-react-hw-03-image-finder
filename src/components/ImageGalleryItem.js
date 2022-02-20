export const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
};
