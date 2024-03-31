import Image from "next/image";

const HeroSection = () => {
    return (
        <>
            <section className="mb-4">
                <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                            Shwetang Prajapati
                            <Image src="/threelines.svg" alt="Logo" width={24} height={24} className="mt-1" />

                        </h1>

                        <p className="mb-8 leading-relaxed sm:text-xl text-lg   text-gray-600">
                            “Software developer with hands-on experience in website design,
                            adaptation, and maintenance. Eager to leverage an extensive
                            knowledge base and background in frontend development to drive
                            forward and optimize online presence, ultimately propelling
                            organizational growth and success.”
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="/shwetangresume.pdf"
                                download="shwetang-resume"
                                rel="noopener noreferrer"
                                className="inline-flex font-semibold text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                target="_blank"
                            >
                                Download Resume
                            </a>
                            <a
                                href={`tel:8968966638`} aria-label="call me"
                                className="ml-4 inline-flex font-semibold text-gray-600 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Call me
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="/technology.svg"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
