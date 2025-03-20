



interface SecondaryBtnProps {
    text: string;
    onClick: () => void;
}

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({ text, onClick }) => {
    return (
        <div className="bg-[#4b4b4d] text-[15.27px] cursor-pointer  flex flex-row items-center px-[15px]  rounded" onClick={onClick}>
            <p className=" ">{text}</p>
            
        </div>
    );
}

export default SecondaryBtn;