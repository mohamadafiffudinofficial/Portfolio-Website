import { experiences } from "../data"
import triangleDown from '../assets/images/triangle-down.svg'
export const Experience = ({refName}) => {
    return (
        <div className="w-full bg-gray-600 h-full p-20 relative" ref={refName}>
            {
                experiences.map((experience,index)=>{
                    return(
                        <div 
                            className={`bg-gray-900 relative text-gray-200 opacity-80 w-5/12 min-h-1/6 px-4 py-3 rounded-md ${index%2!==0 ? 'ml-auto -mt-12 mr-10' : 'ml-10'}`} 
                            key={index}
                        >
                            <p className="text-3xl text-center">{experience.field}</p>
                            <p className="text-2xl text-center  mb-4">{experience.name}</p>
                            {
                                experience.title.map(exp => {
                                    return(
                                        <div className="leading-tight text-base" key={exp.name}>
                                            <p className="mb-2 tracking-wide font-bold">{exp.name}</p>
                                            <p className="mb-2">{exp.task}</p>
                                        </div>
                                    )
                                } )
                            }
                        <img src={triangleDown} className={`w-8 h-8 z-10 absolute -bottom-5  ${index%2!==0 ? 'right-3' : ''}`} alt="triangle-down"/>
                        </div>
                    )
                })
            }
        </div>
    )
}
