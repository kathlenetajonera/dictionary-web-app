import playButton from '../../assets/icons/icon-play.svg';

const PlayButton = () => {
    return (
        <span className="cursor-pointer">
            <img src={playButton} alt="play" className="w-12" />
        </span>
    );
};

export default PlayButton;
