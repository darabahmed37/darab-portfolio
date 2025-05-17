type HeadingProps = {
    title: string;
};

const Heading = ({title}: HeadingProps) => {
    return (
        <div className="flex items-center gap-3">
            <h2 className="text-white text-center whitespace-nowrap text-xl">
                <span className="text-primary font-bold">#</span>{title}
            </h2>
            <div className="w-72 h-px !bg-primary"/>
        </div>
    );
};

export default Heading;
