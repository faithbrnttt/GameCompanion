import { useEffect, useState } from 'react';
import { fetchRawg } from '../api/rawg';
import RatingCard from './RatingCard';

function RawgResults({ query }) {
    const [rawg, setRawg] = useState([]);
    useEffect(() => {
        if (!query) return;
        fetchRawg(query).then(setRawg);
    }, [query]);

    return (
        <div>
            <div id="rating" className="game-header">
                <h1>Ratings</h1>
            </div>
            <hr></hr>
            <div className="game-container">
                {rawg.map((r, index) => (
                    <RatingCard key={r.slug} game={r} urlToImage={r.background_image} />
                ))}
            </div>
        </div>
    );
}

export default RawgResults;
