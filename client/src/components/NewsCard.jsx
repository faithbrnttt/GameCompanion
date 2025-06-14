function Card({ title, description, urlToImage, url, source }) {
    return (
        <div className="card">
            {urlToImage && (
                <div className="card-image-container">
                    <img src={urlToImage} alt={title} className="card-image" />
                </div>
            )}
            <div className="card-content">
                <h3>{title}</h3>
                {source && <p><strong>Source:</strong> {source}</p>}
                <p className="description">{description}</p>
                {url && (
                    <a className="info" href={url} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                )}
            </div>
        </div>
    );
}

export default Card;
