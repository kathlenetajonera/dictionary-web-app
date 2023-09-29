const Skeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="flex items-center justify-between">
                <div>
                    <div className="rounded bg-lightGray dark:bg-darkGray h-14 w-64"></div>
                    <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-36 mt-4"></div>
                </div>
                <div className="rounded-full bg-lightGray dark:bg-darkGray h-14 w-14"></div>
            </div>
            <div>
                <div className="flex items-center my-6">
                    <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-full mt-4"></div>
                </div>
                <div className="mb-6 sm:mb-8 lg:mb-12">
                    <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-36 mt-4"></div>
                    <ul className="list-disc marker:text-violet ml-5 sm:ml-8">
                        <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-full mt-4 mb-3"></div>
                        <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-full mt-4 mb-3"></div>
                        <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-full mt-4 mb-3"></div>
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-36"></div>
                    <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-64 ml-5"></div>
                </div>
            </div>
            <div>
                <div className="flex items-center my-6">
                    <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-full mt-4"></div>
                </div>
                <div className="mb-5">
                    <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-36 mt-4"></div>
                    <ul className="list-disc marker:text-violet ml-5 sm:ml-8">
                        <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-full mt-4 mb-3"></div>
                        <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-full mt-4 mb-3"></div>
                        <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-full mt-4 mb-3"></div>
                    </ul>
                </div>
            </div>
            <div className="rounded bg-lightGray dark:bg-darkGray h-1 w-full mt-8 mb-6"></div>
            <div className="sm:flex sm:items-center sm:text-xs">
                <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-36"></div>
                <div className="rounded bg-lightGray dark:bg-darkGray h-8 w-64 ml-2"></div>
            </div>
        </div>
    );
};

export default Skeleton;
