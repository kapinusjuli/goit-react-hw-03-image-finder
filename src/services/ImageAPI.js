import axios from "axios";

const KeyAPI = "19196344-39ec0398b9669a2b5bdda7f21";
const BASE_URL = "https://pixabay.com/api/";

const GetImages = ({ searchQuery = "", page = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KeyAPI}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data.hits)
    .catch(console.error());
};

export default GetImages;
