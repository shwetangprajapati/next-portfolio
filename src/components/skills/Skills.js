import { skillsData } from "../../lib/constant";

const Skills = () => {

    return (
        <div className=" w-full my-8">

            <div className="bg-indigo-500 px-4 py-2  my-16">
                <marquee >
                    <div className='flex items-center space-x-8 '>
                        {skillsData.map((skill, index) => (
                            <div key={index} className='text-center sm:text-xl text-lg text-white'>
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </marquee>
            </div>
        </div>
    );
};

export default Skills;
