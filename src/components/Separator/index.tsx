type Props = {
    full?: boolean;
    additionalClass?: string;
};

const Separator = ({ full, additionalClass }: Props) => {
    const width = full ? 'w-full' : 'w-[80%] sm:w-[90%]';

    return (
        <span
            className={`block ${width} h-[1px] bg-lightGray ml-auto ${
                additionalClass || ''
            }`}
        />
    );
};

export default Separator;
