



interface PortfolioCardProps {
    text: string;
    text2: string;
    lang1: string;
    lang2: string;
    lang3: string;
    lang4: string;
    lang5: string;
    lang6: string;
    onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ text, lang1, lang2, lang3, lang4, lang5, lang6, text2, onClick }) => {
    return (
        <div className="bg-[#373435] hover:scale-[105%] transition-transform duration-500 text-[15.27px] h-[350px] ring-[1px] ring-[#373435] w-[500px] cursor-pointer  flex flex-row pl-[10px]  rounded-[20px]" onClick={onClick}>
            <div className="w-[38.2%] flex items-center justify-center">
                <div className="flex flex-col">
                    
                    
                    <p>{lang1}</p>
  
                    
                    <p>{lang2}</p>
                    <p>{lang3}</p>
                    <p>{lang4}</p>
                    <p>{lang5}</p>
                    <p>{lang6}</p>
                </div>
                
            </div>
            <div className=" rounded-[20px] px-[8px]  w-[61.8%] flex flex-col items-center justify-center bg-[#101010]">
            <p className="py-[5px] text-[24px] pr-[7px] ">{text}</p>
            <p className="text-[14px] leading-[19px] px-[10px]">{text2}</p>
            
            <div className="flex flex-row items-center justify-center space-x-[10px] pt-[10px]">
                
                <div className="bg-[#000] px-[20px] hover:ring-[0.5px] ring-gray-500  py-[8px] rounded-[20px]">
                    <p>Get code</p>
                </div>
                <div className="bg-[#000] px-[25px]  py-[8px] hover:ring-[0.5px] ring-gray-500 rounded-[10px]">
                    <p>View Demo</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default PortfolioCard;