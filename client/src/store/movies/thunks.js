import axios from "axios";
import { moviesFetched } from "./slice";
import { apiUrl } from "../../config/constants";

export const fetchMovies = async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/movies`);
    const movies = response.data;
    dispatch(moviesFetched(movies));
  } catch (e) {
    console.log(e.message);
  }
};
