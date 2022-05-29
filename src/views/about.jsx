import pinIcon from '../assets/images/pin-icon.svg'
import { bioData } from '../data'
import {contacts} from '../data'

export const About = ({refName}) => {
    return (
        <div className="w-full bg-gray-600 h-full p-20 relative" ref={refName}>
            <div className="text-lg text-gray-200 flex items-center h-3/4 whitespace-pre-line">
                {bioData.about}
            </div>
            <div className="space-y-1 w-10/12 absolute bottom-20 text-gray-200 flex flex-row justify-between">
                <div>
                    <p className="text-5xl font-medium mb-2">{bioData.name}</p>
                    <p className="text-2xl">{bioData.status.skill}||{bioData.status.education}</p>
                    <span className="text-base flex flex-row items-center space-x-2"> 
                    <img src={pinIcon} className="w-4 h-4" alt="location" />
                    <p>{bioData.location.campus} || {bioData.location.home}, {bioData.location.country}</p>
                    </span>
                </div>
                <div className="flex flex-row items-end space-x-3">
                    {
                        contacts.map((contact,idx) =>{
                            return(
                                <a href={contact.text} target="_blank" key={idx}>
                                    <img src={contact.icon} className="w-8 h-8 cursor-pointer transform duration-300 hover:-translate-y-2" alt="icons" />
                                </a>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    )
}
