import {useEffect, useState} from 'preact/hooks';
import type {FunctionComponent} from 'preact';

interface RandomGifProps {
    tag?: string;
    size?: number;
    updateIntervalSeconds?: number;
}

const RandomGif: FunctionComponent<RandomGifProps> = ({tag, size = 200, updateIntervalSeconds = 0}) => {
    const [gifUrl, setGifUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRandomGif = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const params = new URLSearchParams({
                    q: `${tag}`,
                    key: 'LIVDSRZULELA', // not mine is in tenor documentation :)
                    limit: '8',
                });

                const response = await fetch(`https://g.tenor.com/v1/search?${params}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch GIF');
                }

                const data = await response.json();
                if (data.results && data.results.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.results.length);
                    setGifUrl(data.results[randomIndex].media[0].gif.url);
                } else {
                    throw new Error('No GIFs found');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load GIF');
            } finally {
                setIsLoading(false);
            }
        };

        fetchRandomGif();

        let intervalId: number | undefined;
        if (updateIntervalSeconds > 0) {
            intervalId = setInterval(fetchRandomGif, updateIntervalSeconds * 1000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [tag, updateIntervalSeconds]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return gifUrl ? (
        <img src={gifUrl} alt="Random GIF" width={size} height={size}/>
    ) : null;
};

export default RandomGif;