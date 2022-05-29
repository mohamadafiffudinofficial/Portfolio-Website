import { bioData } from "../data"
import { skills } from "../data/skills"
export const Skills = ({refName}) => {
    return (
        <div className="w-full bg-gray-600 h-full p-20 relative" ref={refName}>
            <div className="text-lg text-gray-200 flex items-center h-3/4">
                <div className="relative pt-1 w-full">
                    {
                        skills.map((skill,idx)=>{
                            return (
                                <div key={idx}>
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                        <span className="text-xs tracking-wider font-semibold inline-block py-1 px-2 uppercase rounded-sm text-gray-200 bg-gray-700">
                                            {skill.name}
                                        </span>
                                        </div>
                                        <div className="text-right">
                                        <span className="text-xs  tracking-wider font-semibold inline-block text-gray-200">
                                            {`${skill.percentage}%`}
                                        </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden mb-4 text-xs flex rounded-sm h-4 bg-gray-200">
                                        <div style={{ width: `${skill.percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"></div>
                                    </div>
                                </div>
                            )
                        })
                    }    
                </div>
            </div>
            <div className="space-y-1 w-10/12 absolute bottom-20 text-gray-200">
                <p className="text-5xl font-medium mb-2">{bioData.skills.title}</p>
                <p className="text-2xl">{bioData.skills.description}</p>
            </div>
        </div>
    )
}
