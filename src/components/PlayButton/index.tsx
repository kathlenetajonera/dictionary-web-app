import { useEffect, useState } from 'react';
import playButton from '../../assets/icons/icon-play.svg';

type Props = {
    audio: string;
};

const PlayButton = ({ audio }: Props) => {
    const sound = new Audio(audio);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => setIsPlaying(!isPlaying);

    useEffect(() => {
        sound.addEventListener('ended', () => setIsPlaying(false));

        return () =>
            sound.removeEventListener('ended', () => setIsPlaying(false));
    });

    useEffect(() => {
        if (isPlaying) {
            sound.play();
        }
    }, [isPlaying]);

    return (
        <span className="cursor-pointer transition-opacity hover:opacity-90">
            <img
                src={playButton}
                alt="play"
                className="w-12"
                onClick={handleClick}
            />
        </span>
    );
};

export default PlayButton;
