import { useEffect, useState } from 'react';
import { fetchYoutube} from '../api/ytvid/search';


function TwitchResults({ query }) {
    const [ytvid, setYtvid] = useState([]);
    useEffect(() => {
        if (!query) return;
        fetchYoutube(query).then(setYtvid);
    }, [query]);

    return (
        <div>
            
        </div>
    );
}

export default YoutubeResults;