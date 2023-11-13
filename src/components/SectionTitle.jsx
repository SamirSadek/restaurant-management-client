
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-1/3 my-8">
            <p className="text-yellow-500 mb-2 italic">--- {subHeading} ---</p>
            <h3 className="text-4xl uppercase border-y-2 py-4 text-black">{heading}</h3>
        </div>
    );
};

export default SectionTitle;