

import Image from "next/image"
import Bed from '../images/aii.jpg'
import React, {useEffect, useState} from "react"



const Rooms = () => {

    const [news, setNews] = useState<any[]>([]);
    const [isChanged, setIsChanged] = useState<boolean>(false)


    return(
        <div>
            <div className="bg-gray-100 flex space-x-2 flex-row h-[90vh] px-[15px] py-[8px] text-black  w-full">
                <div className="bg-gray-200 rounded-[10px] py-[10px] px-[15px] w-[100%]">
                    <p className="text-[18px]">All News</p>
                    <div className="flex flex-col space-y-[235px] justify-between">
                        <div className="flex flex-col space-y-[5px] w-[100%] ">
                            <div className="flex flex-row text-[13px] ">
                                <div className=" pl-[8px] w-[165px]">
                                    <p>Image</p>
                                </div>
                                <div className="w-[120px]">
                                    <p>Category</p>
                                </div>
                                <div className="w-[180px]">
                                    <p>Title</p>
                                </div>
                                <div className="w-[122px]">
                                    <p>Subtitle</p>
                                </div>
                                <div className="w-[170px] ">
                                    <p>Description</p>
                                </div>
                                <div className="w-[80px]">
                                    <p>Priority</p>
                                </div>
                                <div className="w-[100px]">
                                    <p>Actions</p>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        
                            
                     
                    </div>
                        <div className="w-[100%] flex pt-[5px]">
                            <button
                                className={` px-3 py-1 rounded ${isChanged ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-700"}`}
                                disabled={!isChanged}
                                
                            >
                                <p>Confirm Order</p>
                            </button>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Rooms;