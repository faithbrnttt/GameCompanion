function TwitchCard({ stream }) {
    const thumbnail = stream.thumbnail_url
        ?.replace('{width}', '300')
        ?.replace('{height}', '180');

    return (
        <div className="twitch-card">
            <div className="twitch-card-image-container">
                <img src={thumbnail} alt={stream.title} className="twitch-image" />
            </div>
            <div className="twitch-card-content">
                <h3>{stream.display_name}</h3>
                <p className="source">Live: {stream.title}</p>
                <p className="description">Game: {stream.game_name || 'N/A'}</p>
                <a
                    className="info-btn"
                    href={`https://www.twitch.tv/${stream.broadcaster_login || stream.user_name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Watch Live
                </a>
            </div>
        </div>
    );
}

export default TwitchCard;
