const fs = require('fs').promises;
const path = require('path');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
const TOKEN_PATH = path.join(__dirname, '../.credentials/token.json');
const CREDENTIALS_PATH = path.join(__dirname, '../client_secret.json');

async function authorize() {
    try {
        const content = await fs.readFile(CREDENTIALS_PATH, 'utf-8');
        const { client_secret, client_id, redirect_uris } = JSON.parse(content).installed;
        const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

        try {
            const token = await fs.readFile(TOKEN_PATH, 'utf-8');
            oAuth2Client.setCredentials(JSON.parse(token));
            return oAuth2Client;
        } catch (tokenErr) {
            console.warn('No token found. Please authorize the app manually.');
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES
            });
            console.log('Authorize this app by visiting this URL:', authUrl);
            return null;
        }
    } catch (err) {
        console.error('Error loading client credentials:', err.message);
        return null;
    }
}

module.exports = { authorize };
