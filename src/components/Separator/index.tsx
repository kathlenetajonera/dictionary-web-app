type Props = {
    full?: boolean;
    additionalClass?: string;
};

const Separator = ({ full, additionalClass }: Props) => {
    const marginLeft = full ? '' : 'ml-6';

    return (
        <span
            className={`block w-full h-[1px] bg-lightGray ${marginLeft} ${
                additionalClass || ''
            }`}
        />
    );
};

export default Separator;
