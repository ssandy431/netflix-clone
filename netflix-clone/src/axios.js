import axios from 'axios';

export const baseUrl = "https://api.themoviedb.org/3";
export const imageBaseURL = 'https://image.tmdb.org/t/p/original/'
const instance = axios.create({
    baseURL: baseUrl,
});



const getMovies = (url) =>{
    // console.log(url);
    return instance.get(url);
}

export default getMovies;