import axios from 'axios';

const KEY = 'AIzaSyARf-et66OgMUp_3cWT1Cm0DLa7jbR2Gis';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})
