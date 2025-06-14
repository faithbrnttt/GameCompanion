const axios = require('axios');
const NEWS_API_KEY = process.env.NEWS_API_KEY;

exports.getNews = async (req, res) => {
    const query = req.query.q || 'gaming';

    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: query,
                sortBy: 'publishedAt',
                apiKey: NEWS_API_KEY
            }
        });
        res.json(response.data.articles);
    } catch (err) {
        console.error(err.response?.data || err.message); // 👈 critical for debugging
        res.status(500).json({ error: 'Failed to fetch news' });
    }
};
