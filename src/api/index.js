import axios from "axios";

const API_END_POINT = process.env.REACT_APP_API_ENDPOINT;

export const getMovieListsByTitle = async (value, page = 1) => {
    const results = await axios
        .get(`${API_END_POINT}&s=${value}&page=${page}`)
        .then((res) => res.data);

    return results;
};

export const getMovieInformationByID = async (id) => {
    const result = await axios.get(`${API_END_POINT}&i=${id}`).then((res) => res.data);

    return result;
};
