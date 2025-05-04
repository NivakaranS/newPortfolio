



import React, {useEffect, useState} from "react"

import axios from "axios"

const Guests = () => {
    const [newsTitle, setNewsTitle] = useState<string>("")
    const [newsSubtitle, setNewsSubtitle] = useState<string>("")
    const [newsContent, setNewsContent] = useState<string>("")
    const [newsCategory, setNewsCategory] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [newsSuccess, setNewsSuccess] = useState<boolean>(false)
    const [newsCategories, setNewsCategories] = useState<any[]>([])
    const [newsCategoryTitle, setNewsCategoryTitle] = useState<string>("")
    const [newsCategoryImageUrl, setNewsCategoryImageUrl] = useState<string>("")

    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)



    return(
        <div>
            <div className="bg-gray-100 flex space-x-2 flex-row h-[90vh] px-[15px] py-[8px] text-black  w-full">
                <div className="bg-gray-200 rounded-[10px] py-[10px] px-[15px] w-[75%]">
                    
                    <div className="mt-[10px] flex flex-col px-[10px]">
                        <p className="text-[25px]">Create News</p>
                        <div className="overflow-y-scroll overflow-x-hidden flex flex-col space-y-[8px] h-[480px]">
                            <div className="flex flex-col  space-y-[2px] ">
                                <p className="text-[16px]">Title</p>
                                <input placeholder="" value={newsTitle} className="focus:outline-none border bg-white rounded-[5px] px-[10px] py-[5px] w-[98%]"/>
                            </div>
                            <div className="flex flex-col  space-y-[2px]">
                                <p className="text-[16px]">Subtitle</p>
                                <input placeholder="" value={newsSubtitle} className="focus:outline-none border bg-white rounded-[5px] px-[10px] py-[5px] w-[98%]"/>
                            </div>
                            <div className="flex flex-col mb-[15px] space-y-[5px]">
                                <p className="text-[16px]">News category<span className="text-[10px] ml-[2px]">(Select one)</span></p>
                                <div className="w-[98%] overflow-x-scroll  overflow-y-hidden no-scrollbar h-[8vh] py-[5px] px-[10px]  flex flex-row space-x-[10px] ">
                                    
                                    {newsCategories.map((category, index) => (
                                        <div key={index} className={`${newsCategory== category.title ? ' ring-[3px] ring-blue-500' : ''} text-[14px] cursor-pointer rounded border-[0.5px] bg-white flex items-center justify-center w-fit px-[10px] py-[5px]`}>
                                            <p>{category.title}</p>
                                        </div>
                                    ))
                                        }

                                    
                                </div>
                            </div>
                            <div className="flex flex-col  space-y-[2px]">
                                <p className="text-[16px]">Description<span className="text-[11px] ml-[3px]">(Max characters: 100)</span></p>
                                <textarea placeholder="" value={description} className="border focus:outline-none bg-white h-[100px] rounded-[5px] px-[10px] py-[5px] w-[98%]"/>
                            </div>
                            <div className="flex flex-col  space-y-[2px]">
                                <p className="text-[16px]">Content</p>
                                <textarea placeholder="" value={newsContent} className="border focus:outline-none bg-white h-[300px] rounded-[5px] px-[10px] py-[5px] w-[98%]"/>
                            </div>
                            <div className="flex flex-row ml-[10px] space-x-[5px]">
                                <input type="checkbox" className="bg-white"/>
                                <p className="text-[13px]">I confirm that information provided is correct</p>
                            </div>
                            <div className="flex  px-[20px] pb-[10px]">
                                <div  className="bg-blue-500 cursor-pointer w-fit px-[15px] py-[5px] rounded">
                                    <p>Submit</p>
                                </div>
                            </div>
                            <div className={`${newsSuccess ? ' scale-100' : 'scale-0'} absolute top-[45px] left-[40%] right-[40%] bg-green-500 ring-[1px] ring-green-900 opacity-70  flex items-center justify-center px-[10px] h-[60px] w-[210px]  rounded-[10px]`}>
                                <p className="leading-[20px]">News successfully Created</p>
                            </div>
                        </div>
                    </div>
                        
                    
                    

                </div>
                <div className=" py-[10px] px-[10px] bg-gray-200 rounded-[10px] h-[85%] w-[30%]">
                    <p>Add News Category</p>
                    
                    <div className="my-[5px]">
                        <div className="text-[13px] w-[50%] flex flex-col space-y-[2px]">
                            <p>Category Name</p>
                            <div className="ml-[3px] ">
                                <input  value={newsCategoryTitle} className="px-[5px] focus:outline-none py-[4px] w-[212px] border-gray-400 rounded border-[1px]"/>
                            </div>
                        </div>
                    </div>
                  
                    <div className="text-[13px] bg-white mb-[8px] py-[7px] rounded-[8px] border-gray-400 border-[1px] ">
                        <p className="px-[10px] mb-[5px]">Upload</p>
                        <div className="text-center h-[100px] flex flex-col border-gray-400 items-center justify-center border-y-[1px]">
                            <p><span className="text-blue-700 cursor-pointer">Click to upload</span> or drag and drop</p>
                            <p className="text-[11px]">[Max File size: 25 MB]</p>
                            <input type="file" className="bg-gray-500"  />
                        </div>
                        <div>
                            <div className="leading-[14px] pt-[8px] px-[10px]">
                                <p>Room image 1.jpge</p>
                                <p className="text-[10px]  text-gray-500">200 KB</p>
                            </div>
                            <div className="flex flex-row items-center  justify-center space-x-[5px]">
                                <div className="w-[79%] h-[3px] bg-black rounded-[10px]"></div>
                                <p className="text-[10px] text-gray-700 ">40%</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row justify-end  space-x-[5px] text-[13px] ">
                       
                        <div  className="bg-blue-600 text-white flex items-center justify-center px-[15px] py-[5px] cursor-pointer rounded border-[1px] border-gray-500">
                            <p>Add Category</p>
                        </div>
                    </div>
                    <div>
                        <p>Delete Category</p>
                    </div>
                    <div className="grid grid-cols-3 gap-[5px]">
                    {newsCategories.map((category, index) => (
                                        <div key={index}  className={`${newsCategory== category.title ? 'ring-[3px] ring-blue-500' : ''} text-[14px] cursor-pointer rounded border-[0.5px] bg-white w-[100%] flex items-center justify-center`}>
                                            <p>{category.title}</p>
                                        </div>
                                    ))
                                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guests