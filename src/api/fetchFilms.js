import axios from "axios";

//??     ЗАПРОС НА БЭКЕНД ЗА ТРЕНДОВЫМИ ФИЛЬМАМИ

export const fetchFilms = async (page, setMovies) => {
  try {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=826ff55be219075fe0c51d998b696b2f&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  } catch (error) {
    console.error(error);
  }
};
export const searchFilms = async (page, setMovies, value) => {
  try {
    await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=826ff55be219075fe0c51d998b696b2f&page=${page}&query=${value}`
    ).then((res) => {
      setMovies(res.data.results);
    });
  } catch (error) {
    console.error(error);
  }
};
