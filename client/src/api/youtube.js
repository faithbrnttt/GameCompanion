import axios from 'axios';

export const fetchYoutube = async (query) => {
    const res = await axios.get(`/api/ytvid/search?q=${query}`)
    return res.data;
};