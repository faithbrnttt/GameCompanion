import axios from 'axios';

export const fetchTwitch = async (query) => {
    const res = await axios.get(`/api/twitch/search?q=${query}`);
    return res.data;
};
