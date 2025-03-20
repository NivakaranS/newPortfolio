

interface BlogCardProps {
    text: string;
    onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ text, onClick }) => {
    return (
        <div className="bg-[#4b4b4d] ring-[0.5px] ring-[#4b4b4d] text-[15.27px] cursor-pointer h-[340px] w-[250px] flex flex-col rounded-[20px]" onClick={onClick}>
            <div className="h-[61.80%] bg-[#373435] rounded-t-[20px] flex items-center justify-center">
                <p className="py-[5px] pr-[7px]">{text}</p>
            </div>
            <div className=" px-[8px] flex items-center justify-center h-[38.2%] rounded-b-[20px] bg-[#101010]">
                
            </div>
        </div>
    );
}

export default BlogCard;