import axios from 'axios';

export const fetchRawg = async (query) => {
    const res = await axios.get(`/api/games/search?q=${query}`)
    return res.data;
};