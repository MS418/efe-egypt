import Logo from '../assets/logo.png';

const Header = () => {
return (
    <div>
        <div className="grid place-content-center my-4"> 
            <img src={Logo} alt="Logo" className='h-[150px] w-[150px] border-4 border-[#E67326] rounded-full' />
        </div>
        <h1 className="text-2xl font-semibold text-white">
            EFE Egypt
        </h1>
    </div>
)
}

export default Header