import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt, faGamepad } from '@fortawesome/free-solid-svg-icons';

function RatingCard({ game, urlToImage }) {

    const formatHours = (hours) => `${hours} ${hours === 1 ? 'hour' : 'hours'}`;

    return (
        <div className="game-card">
            {urlToImage && (
                <div className="game-image-container">
                    <img src={urlToImage} alt={game.name} className="game-image" />
                </div>
            )}
            <div className="game-content">
                <h3 className="game-title">
                    <FontAwesomeIcon icon={faGamepad} /> {game.name}
                </h3>

                <p><FontAwesomeIcon icon={faCalendarAlt} /> <strong>Released:</strong> {game.released}</p>
                <p>
                    <p>
                        <FontAwesomeIcon icon={faClock} /> <strong>Playtime:</strong> {formatHours(game.playtime)}
                    </p>

                </p>

                <hr className="divider"></hr>
                <div className="ratings">
                    <div className="rating-badges">
                        {game.ratings.map((rating) => (
                            <span key={rating.id} className="rating-badge">
                                {rating.title}: {rating.percent}%
                            </span>
                        ))}
                    </div>
                </div>

                <a className="info-btn" href={`https://rawg.io/games/${game.slug}`} target="_blank" rel="noopener noreferrer">
                    Details
                </a>
            </div>
        </div>
    );
}

export default RatingCard;
