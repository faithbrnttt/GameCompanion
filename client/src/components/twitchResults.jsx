import { useEffect, useState } from 'react';
import { fetchTwitch } from '../api/twitch'
import TwitchCard from './TwitchCard';

function TwitchResults({ query }) {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        if (!query) return;
        fetchTwitch(query)
            .then(setStreams)
            .catch((err) => console.error(err));
    }, [query]);

    if (!streams.length) return null;

    return (
        <div>
            <div id="stream" className="twitch-header">
                <h1>Twitch</h1>
            </div>
            <hr></hr>
            <div className="twitch-container">
                {streams.map((stream) => (
                    <TwitchCard key={stream.id || stream.broadcaster_login} stream={stream} />
                ))}
            </div>
        </div>
    );
}

export default TwitchResults;
