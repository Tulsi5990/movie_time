// axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: "http://www.omdbapi.com",
    params: {
        apikey: "4983cdc" // Your OMDB API key
    }
});

export default instance;


