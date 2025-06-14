const axios = require('axios');
require('dotenv').config();

let accessToken = null;

/**
 * Get a new app access token using client credentials
 */
async function getTwitchToken() {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
        params: {
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: 'client_credentials'
        }
    });
    accessToken = response.data.access_token;
    return accessToken;
}

/**
 * Search Twitch for live streams by game/query
 */
async function searchTwitchStreams(query) {
    if (!accessToken) await getTwitchToken();

    const response = await axios.get('https://api.twitch.tv/helix/search/channels', {
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${accessToken}`
        },
        params: {
            query,
            live_only: true
        }
    });

    return response.data.data;
}

module.exports = { searchTwitchStreams };
