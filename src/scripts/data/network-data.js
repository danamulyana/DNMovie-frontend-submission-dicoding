const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd9e9e6f80cafe42e4d424c90a9d6e0b0';

function getTrending(){
    return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
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
        window.localStorage.setItem('genres', JSON.stringify(resJson.genres))

        return Promise.resolve(resJson.genres);
    })
}

function discoverMovie(page,genres,sort_by,year,init){
    let params = {
        api_key : API_KEY,
        language: 'en-US',
        year: year,
        with_genres: genres,
        sort_by: sort_by,
        page: page,
    };

    return fetch(`${BASE_URL}/discover/movie?${new URLSearchParams(params).toString()}`)
    .then(res => {return res.json()})
    .then(resJson => {
        if(!resJson.results){
            return Promise.reject(`Error API discover Movie`);
        }

        return Promise.resolve({result : resJson.results, init: init});
    });
}

export {
    getTrending,
    getGenres,
    discoverMovie
};