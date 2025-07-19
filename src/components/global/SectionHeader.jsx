const SectionHeader = ({ title, subTitle }) => {
    return (
        <>
            <h2 className="section-title">{title}</h2>
            <span className="section-subtitle">{subTitle}</span>
        </>

    );
};

export default SectionHeader;