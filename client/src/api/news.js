import axios from 'axios';

export const fetchNews = async (query) => {
    const res = await axios.get(`/api/news/search?q=${query}`);
    return res.data;
};