'use client'
import PrimaryBtn from "./PrimaryBtn";
import { useState } from "react";

interface ContactModelProps {
    onContactClick: () => void;
    showContactModel: boolean;
  }
  
const ContactModel: React.FC<ContactModelProps> = ({ onContactClick, showContactModel }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('')

    const onContactFormSubmit = () => {
        
        onContactClick();
        setEmail('');
        setName('');
        setTitle('');
        setMessage('');
        
    }

    return(
        <div
  className={`${
    showContactModel ? 'translate-x-0' : 'translate-x-full'
  } transition-transform ease-in-out duration-700 flex flex-row items-center justify-center absolute fixed z-[100] h-screen w-screen`}
>

  <div
    onClick={onContactClick}
    className={`${
      showContactModel
        ? 'opacity-80 delay-500 duration-700' 
        : 'opacity-0 duration-100' 
    } transition-opacity ease-in-out w-[20%] h-screen bg-black`}
  ></div>

  
  <div className="w-[80%] h-screen flex justify-center py-2 bg-[#433D3A] transition-transform ease-in-out duration-700">
    <div className="flex flex-row w-[90%] justify-between">
      <div className=" w-[50%] h-[100%] flex flex-col items-center justify-center">
        <p className="text-[45px] leading-[50px] w-[90%]">Let's Talk About <span className="text-[#101010]">Your Next Project</span></p>
        <p className="w-[90%] mt-[5px]" >We'd love to hear from you whether it's a project inquiry, feedback, or just a friendly hello, don't hesitate to reach out: Let's create something amazing.</p>
      </div>
      <div className="text-[45px] leading-[50px] w-[50%]">
        <div className="text-[18px] flex justify-end  cursor-pointer" onClick={onContactClick}>
            <p>Close</p>
        </div>
        <div className="text-[18px] flex flex-col items-center justify-center h-[100%]">
            <div className="flex flex-row w-[100%] pr-[40px] space-x-[20px]">
                <div className="leading-[30px]">
                    <p>Name</p>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-[100%] focus:outline-none px-[13px] h-[40px] bg-[#101010] text-[#96989A] border-[1px] border-[#96989A] rounded-[8px]"/>
                </div>
                <div className="leading-[30px]">
                    <p>Email</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="w-[100%] focus:outline-none px-[13px] h-[40px] bg-[#101010] text-[#96989A] border-[1px] border-[#96989A] rounded-[8px] "/>
                </div>
            </div>
            <div className="w-[100%] mt-[10px] ">
                <div className=" leading-[30px] ">
                    <p>Title</p>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="w-[92%] focus:outline-none px-[13px] h-[40px] bg-[#101010] text-[#96989A] border-[1px] border-[#96989A] rounded-[8px] "/>
                </div>
               
            </div>
            <div className="w-[100%] mt-[10px]">
                <div className="leading-[30px]">
                    <p>Message</p>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="bg-[#101010] focus:outline-none px-[13px] py-[3px] h-[200px] w-[92%] text-[#96989A] border-[1px] border-[#96989A] rounded-[8px] "/>
                </div>

            </div>
            <div className="leading-[30px]">
                <PrimaryBtn onClick={onContactFormSubmit} text="Submit"/>
            </div>
            
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default ContactModel;