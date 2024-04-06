import React from "react";
import Heading from "../heading/Heading";
import { Projects } from "../../lib/constant";

const ProjectCards = () => {
    return (
        <>
            <Heading title="Projects" image="/underline.svg" />
            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {Projects.map((item, index) => (
                            <div
                                key={index}
                                className="text-start bg-gray-100 bg-opacity-75 p-6 rounded-lg overflow-hidden  relative"
                            >
                                <h2 className="sm:text-2xl text-xl font-bold  text-gray-900 mb-3 uppercase">
                                    {item.name}
                                </h2>
                                <p className="leading-relaxed mb-3 line-clamp-4 sm:text-xl text-lg   text-gray-900">
                                    {item.desc}
                                </p>
                                <div className="tracking-widest text-xs title-font  font-medium text-gray-900 mb-1">
                                    {item.technologies.map((tech, index) => (
                                        <span key={index}>{tech} </span>
                                    ))}
                                </div>
                                <a
                                    className="text-indigo-500 hover:scale-105 hover:text-indigo-600 inline-flex items-center sm:text-xl text-lg"
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.isLive ? "View on github" : "View"}
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectCards;
