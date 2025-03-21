
interface ContactModelProps {
    onContactClick: () => void;

  }

const Navigation : React.FC<ContactModelProps> = ({onContactClick}) => {
    return(
        <div className="flex items-center z-[50] fixed top-0 w-[100vw] justify-center">
            
            <div className="flex flex-row  justify-between items-center px-[20px] h-[60px] 2xl:h-[55px] rounded-[8px] ring-[0.5px] ring-[#727376] w-[90vw] mt-[13px]  bg-[#373435] text-black ">
                <div className="cursor-pointer text-[20px] text-white">
                    <p>Nivakaran</p>
                </div>
                <div className="flex flex-row items-center text-[17px] justify-between text-white  w-[35%]">
                    <div className="cursor-pointer hover:text-[#FFD700]">
                        <p>Home</p>
                    </div>
                    <div className="cursor-pointer hover:text-[#FFD700]">
                        <p>About</p>
                    </div>
                    <div className="cursor-pointer hover:text-[#FFD700]">
                        <p>Services</p>
                    </div>
                    <div className="cursor-pointer hover:text-[#FFD700]">
                        <p>Portfolio</p>
                    </div>
                    <div className="cursor-pointer hover:text-[#FFD700]">
                        <p>Blogs</p>
                    </div>
                    
                </div>
                <div>
                    <div onClick={onContactClick} className="cursor-pointer bg-[#4B4B4D] text-white px-[18px] text-[15px] ring-[0.8px] ring-gray-800 py-[7px] rounded-[20px]">
                        <p>Let's talk</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;