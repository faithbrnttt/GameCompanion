const axios = require('axios');

const RAWG_API_KEY = process.env.RAWG_API_KEY;

exports.searchGames = async (req, res) => {
    const query = req.query.q || 'elden ring';
    try {
        const response = await axios.get('https://api.rawg.io/api/games', {
            params: {
                key: RAWG_API_KEY,
                search: query
            }
        });
        res.json(response.data.results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
