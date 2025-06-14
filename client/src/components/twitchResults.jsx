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

    return (
        <div>
            <div id="stream" className="twitch-header">
                <h1>Twitch</h1>
            </div>
            <hr />
            <div className="twitch-container">
                {streams.length > 0 ? (
                    streams.map((stream) => (
                        <TwitchCard key={stream.id || stream.broadcaster_login} stream={stream} />
                    ))
                ) : (
                    <p style={{ color: 'white' }}></p>
                )}
            </div>
        </div>
    );
}

export default TwitchResults;
