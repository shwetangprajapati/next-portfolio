import Image from "next/image";

const Heading = ({ title, image }) => {
    return (
        <div className="flex flex-col items-start justify-center mb-4 px-2 lg:px-0">
            <h1 className="sm:text-3xl text-xl font-bold">{title}</h1>
            <Image src={image} alt="Logo" width={44} height={16} className="mt-1" />

        </div>
    );
};

export default Heading;
