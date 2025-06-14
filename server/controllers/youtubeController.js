const { google } = require('googleapis');
const { authorize } = require('../services/youtube');


exports.searchYouTube = async (req, res) => {
    const query = req.query.q || 'elden ring';
    const auth = await authorize();

    if (!auth) {
        return res.status(401).json({ error: 'Authorization required. Check server logs for URL.' });
    }

    const service = google.youtube('v3');
    try {
        const response = await service.search.list({
            auth,
            part: 'snippet',
            q: query,
            maxResults: 5
        });
        res.json(response.data.items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
