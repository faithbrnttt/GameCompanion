import { useEffect, useState } from 'react';
import { fetchNews } from '../api/news';
import Card from './NewsCard';

function NewsResults({ query }) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        if (!query) return;
        fetchNews(query).then(setNews);
    }, [query]);

    return (
        <>
            <div id="news" className="news-header">
                <h1>News</h1>
            </div>
            <hr></hr>
            <div className="news-container">
                {news.map((article, index) => (
                    <Card
                        key={index}
                        title={article.title}
                        source={article.source.name}
                        description={article.description}
                        urlToImage={article.urlToImage}
                        url={article.url}
                    />
                ))}

            </div>
        </>
    );
}

export default NewsResults;
