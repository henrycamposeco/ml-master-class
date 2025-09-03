
import { useRef, useState } from 'preact/hooks';
import type {MutableRefObject} from "react";

interface UseAudioOptions {
    loop?: boolean;
    volume?: number;
    autoPlay?: boolean;
}

interface UseAudioReturn {
    audioRef: MutableRefObject<HTMLAudioElement | null>;
    isPlaying: boolean;
    isLoaded: boolean;
    play: () => Promise<void>;
    pause: () => void;
    stop: () => void;
    setVolume: (volume: number) => void;
}

export const useAudio = (
    src: string,
    options: UseAudioOptions = {}
): UseAudioReturn => {
    const { loop = false, volume = 1} = options;
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const initializeAudio = () => {
        if (!audioRef.current) {
            const audio = new Audio(src);
            audio.loop = loop;
            audio.volume = volume;
            audioRef.current = audio;

            audio.addEventListener('ended', () => setIsPlaying(false));
            audio.addEventListener('pause', () => setIsPlaying(false));
            audio.addEventListener('play', () => setIsPlaying(true));
        }
    };

    const play = async (): Promise<void> => {
        initializeAudio();

        if (audioRef.current) {
            try {
                await audioRef.current.play();
                setIsLoaded(true);
                setIsPlaying(true);
            } catch (error) {
                console.log('Audio playback failed:', error);
                throw error;
            }
        }
    };

    const pause = (): void => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const stop = (): void => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const setVolume = (newVolume: number): void => {
        if (audioRef.current) {
            audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
        }
    };

    return {
        audioRef,
        isPlaying,
        isLoaded,
        play,
        pause,
        stop,
        setVolume
    };
};