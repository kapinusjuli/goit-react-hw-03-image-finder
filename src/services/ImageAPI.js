import axios from "axios";

axios.defaults.baseURL =
  "https://pixabay.com/api/?q=sakura&page=1&key=19196344-39ec0398b9669a2b5bdda7f21&image_type=photo&orientation=horizontal&per_page=12";

export default async function GetImages() {
  const response = await axios.get("/images");
  return response.data.hits;
}
