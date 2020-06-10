const apiKey = `66683917a94e703e14ca150023f4ea7c`;
let stage;

export const init = (stageInstance) =>{
    stage = stageInstance;
};


/**
 * @todo:
 * call get with the correct url
 * https://api.themoviedb.org/3/movie/popular
 * and return the data
 */
export const getMovies = async()=> {
    // let url = 'https://api.themoviedb.org/3/movie/popular';
    // let queryString = '?api_key=';

    // return get(url + queryString + apiKey);
    return get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
};

const get = (url)=> {
    return fetch(url, {
        'Accept': 'application/json'
    }).then(response => {
        return response.json();
    })
};
