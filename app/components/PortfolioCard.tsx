



interface PortfolioCardProps {
    text: string;
    text2: string;
    onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ text, text2, onClick }) => {
    return (
        <div className="bg-[#373435] text-[15.27px] h-[350px] ring-[1px] ring-[#373435] w-[500px] cursor-pointer  flex flex-row pl-[10px]  rounded-[20px]" onClick={onClick}>
            <div className="w-[38.2%]">
                
            </div>
            <div className=" rounded-[20px] px-[8px]  w-[61.8%] flex flex-col items-center justify-center bg-[#101010]">
            <p className="py-[5px] text-[24px] pr-[7px] ">{text}</p>
            <p className="text-[15px] leading-[21px] px-[10px]">{text2}</p>
            </div>
        </div>
    );
}

export default PortfolioCard;