import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLocationDot, faPhone  } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTiktok, faFacebook, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './style.css';

const Body = () => {
return (
    <div className="my-8">
        <a href="https://www.efe.org/network/efe-egypt">
            <button
                className="border-4 border-[#E67326] bg-white text-black w-[100%]  px-4 py-2 rounded-xl text-2xl font-semibold drop-shadow-lg my-2
                transition duration-300 ease-in-out hover:scale-105">
                Website
                <FontAwesomeIcon icon={faGlobe} className='bg-white px-2 text-[#991C1A]' />
            </button>
        </a>
        <a href="https://www.linkedin.com/company/efeegypt/posts/?feedView=all">
            <button
                className="border-4 border-[#E67326] bg-white text-black w-[100%]  px-4 py-2 rounded-xl text-2xl font-semibold drop-shadow-lg my-2
                transition duration-300 ease-in-out hover:scale-105">
                Linkedin
                <FontAwesomeIcon icon={faLinkedin } className='bg-white px-2 text-[#991C1A]' />
            </button>
        </a>
        <a href="https://www.facebook.com/@EFEEgypt">
            <button
                className="border-4 border-[#E67326] bg-white text-black w-[100%]  px-4 py-2 rounded-xl text-2xl font-semibold drop-shadow-lg my-2
                transition duration-300 ease-in-out hover:scale-105">
                Facebook
                <FontAwesomeIcon icon={faFacebook } className='bg-white px-2 text-[#991C1A]' />
            </button>
        </a>
        <a href="https://www.instagram.com/efe_egypt/">
            <button
                className="border-4 border-[#E67326] bg-white text-black w-[100%]  px-4 py-2 rounded-xl text-2xl font-semibold drop-shadow-lg my-2
                transition duration-300 ease-in-out hover:scale-105">
                Instagram
                <FontAwesomeIcon icon={faInstagram  } className='bg-white px-2 text-[#991C1A]' />
            </button>
        </a>
        <a href="https://www.tiktok.com/tag/efe-egypt">
            <button
                className="border-4 border-[#E67326] bg-white text-black w-[100%]  px-4 py-2 rounded-xl text-2xl font-semibold drop-shadow-lg my-2
                transition duration-300 ease-in-out hover:scale-105">
                Tiktok
                <FontAwesomeIcon icon={faTiktok } className='bg-white px-2 text-[#991C1A]' />
            </button>
        </a>
        <a href="https://maps.app.goo.gl/JLeimozHF4B2YJrs5">
            <button
                className="border-4 border-[#E67326] bg-white text-black w-[100%]  px-4 py-2 rounded-xl text-2xl font-semibold drop-shadow-lg my-2
                transition duration-300 ease-in-out hover:scale-105">
                Location
                <FontAwesomeIcon icon={faLocationDot } className='bg-white px-2 text-[#991C1A]' />
            </button>
        </a>
        <a href="#">
            <button
                className="border-4 border-[#E67326] bg-white text-black w-[100%]  px-4 py-2 rounded-xl text-2xl font-semibold drop-shadow-lg my-2
                transition duration-300 ease-in-out hover:scale-105">
                WhatsApp
                <FontAwesomeIcon icon={faWhatsapp} className='bg-white px-2 text-[#991C1A]' />
            </button>
        </a>
        <Link to="/contact">
            <button
                className="border-4 border-[#E67326] bg-white text-black w-[100%]  px-4 py-2 rounded-xl text-2xl font-semibold drop-shadow-lg my-2
                transition duration-300 ease-in-out hover:scale-105">
                Contact us
                <FontAwesomeIcon icon={faPhone} className='bg-white px-2 text-[#991C1A]' />
            </button>
        </Link>
    </div>
)
}

export default Body
