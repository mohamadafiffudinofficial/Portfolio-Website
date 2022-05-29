import instagramIcon from '../assets/images/ig-icon.svg'
import whatsappIcon from '../assets/images/wa-icon.svg'
import githubIcon from '../assets/images/github-icon.svg'
import linkedInIcon from '../assets/images/linkedin-icon.svg'
import gmailIcon from '../assets/images/gmail-icon.svg'

const defaultChat = 'Hi Fajar.'
const defaultSubject = 'I saw your profile'

export const contacts = [
    {
        icon:whatsappIcon,
        text : `https://api.whatsapp.com/send/?phone=%2B6283830666996&text=${defaultChat}&app_absent=0`,
    },
    {
        icon:gmailIcon,
        text : `mailto:mohamadafiffudin@gmail.com?subject=${defaultSubject}&body=${defaultChat}`
    },
    {
        icon:instagramIcon,
        text : 'https://www.instagram.com/maknaeafif/'
    },
    {
        icon:githubIcon,
        text : 'https://github.com/mohamadafiffudinofficial'
    },
    {
        icon:linkedInIcon,
        text : 'https://www.linkedin.com/in/mohamad-afif-fudin/'
    },
]