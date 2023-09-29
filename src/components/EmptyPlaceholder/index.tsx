const EmptyPlaceholder = () => {
    return (
        <div className="text-center mt-32">
            <span className="text-6xl">😕</span>
            <h4 className="text-xl font-bold mt-11 mb-6">
                No Definitions Found
            </h4>
            <p className="text-gray">
                Sorry pal, we couldn't find definitions for the word you were
                looking for. You can try the search again at later time or head
                to the web instead.
            </p>
        </div>
    );
};

export default EmptyPlaceholder;
