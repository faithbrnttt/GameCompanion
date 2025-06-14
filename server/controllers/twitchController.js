const { searchTwitchStreams } = require('../services/twitch');

exports.searchStreams = async (req, res) => {
    const query = req.query.q || 'elden ring';
    try {
        const streams = await searchTwitchStreams(query);
        res.json(streams);
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: 'Failed to fetch Twitch streams' });
    }
};
