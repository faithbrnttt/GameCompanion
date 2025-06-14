require('dotenv').config();
const express = require('express');
const cors = require('cors');

const rawgRoute = require('./routes/rawgRoute');
const twitchRoute = require('./routes/twitchRoute');
const newsRoute = require('./routes/newsRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/games', rawgRoute);

app.use('/api/twitch', twitchRoute);

app.use('/api/news', newsRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
