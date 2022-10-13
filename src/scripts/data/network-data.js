import { async } from "regenerator-runtime";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd9e9e6f80cafe42e4d424c90a9d6e0b0';

function getTrending(){
    return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then(res => {
        return res.json();
    }).then(resJson => {
        if(!resJson.results){
            return Promise.reject(`Error API Tranding`);
        }

        return Promise.resolve(resJson.results);
    })
}

function getGenres(){
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then(res => {
        return res.json();
    }).then(resJson => {
        fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`).then(restv => {
            return restv.json();
        }).then(restvJson => {
            window.localStorage.setItem('genres', JSON.stringify({tv : restvJson.genres,movie : resJson.genres}))
        });
    })
}

export {
    getTrending,
    getGenres
};