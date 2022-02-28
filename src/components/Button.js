export default function Button({ onHandleClick }) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });

  return (
    <>
      <button type="button" className="Button" onClick={onHandleClick}>
        Load More...
      </button>
    </>
  );
}
