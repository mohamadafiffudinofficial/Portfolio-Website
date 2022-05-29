
import Avatar from '../assets/images/profile.jpg'
import { navBarItems } from '../data'
export const SideBar = ({executeScroll,currentView}) => {
    return (
        <div className="w-2/12 bg-gray-700 h-full flex flex-col justify-center items-center space-y-2">
            <img src={Avatar} className="w-48 h-48 rounded-full shadow-lg mb-5 border-8 border-purple-600 border-opacity-10" alt="fajar's" />
            {
                navBarItems.map(item=>{
                    const textPurple = currentView===item.label ? 'text-purple-600' : ''
                   return(
                    <p
                    key={item.label}
                    onClick={()=>executeScroll(item.label)} 
                    className={`tracking-wider font-bold text-lg uppercase text-gray-200 cursor-pointer w-full p-2 text-center ${textPurple} hover:text-gray-400`}>
                        {item.label}
                    </p>
                   )
                } )
            }
        </div>
    )
}
