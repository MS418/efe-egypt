import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function ContactUs() {
  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="my-8">
        <button
          onClick={() => handleCall("+2010-288-41020")}
        className="border-4 border-[#E67326] bg-white text-black w-[100%] px-4 py-2 rounded-xl text-2xl font-semibold drop-shadow-lg my-2
        transition duration-300 ease-in-out hover:scale-105"
        >
          01028841020
          <FontAwesomeIcon
            icon={faPhone}
            className="bg-white px-2 text-[#991C1A]"
          />
        </button>
    </div>
  );
}

export default ContactUs;
