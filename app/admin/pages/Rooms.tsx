

import Image from "next/image"
import Bed from '../images/aii.jpg'
import React, {useEffect, useState} from "react"
import axios from "axios";



const Rooms = () => {

    const [news, setNews] = useState<any[]>([]);
    const [isChanged, setIsChanged] = useState<boolean>(false)
    const [programmingLanguages, setProgrammingLanguages] = useState<any[]>([])
    const [programmingLanguage, setProgrammingLanguage] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [demoLink, setDemoLink] = useState<string>('')
    const [githubLink, setGithubLink] = useState<string>('')

    const [addingCategory, setAddingCategory] = useState<string>('')



    const [projectCategories, setProjectCategories] = useState<any[]>([])

    useEffect(() => {
        const fetchProjectCategories = async () => {
            try {
                const response = await axios.get('https://new-portfolio-backend-roan.vercel.app/projectCategory')
                
                setProjectCategories(response.data)
                console.log('Project categories', response.data)
            } catch (error) {
                console.error("Error fetching news data:", error)
            }
        }
        fetchProjectCategories()
    }, [])

    const handleAddCategory = async () => {
        try {
            const response = await axios.post('https://new-portfolio-backend-roan.vercel.app/projectCategory', {
                name: addingCategory
            })
            console.log('Project category added successfully')
        } catch (error) {
            console.error("Error adding project category:", error)
        }
    }


    const handleAddProject = async () => {
        
        if (
            !title || !description || !category ||
            !Array.isArray(programmingLanguages) || programmingLanguages.length === 0 ||
            !demoLink || !githubLink
        ) {
            console.error("All fields are required");
            return;
        }
    
        try {
            const response = await axios.post('https://new-portfolio-backend-roan.vercel.app/project', {
                title,
                description,
                category, 
                demoLink,
                githubLink,
                programmingLanguages, 
            });
    
            console.log('Project added successfully:', response.data);
        } catch (error) {
            console.error("Error adding project:", error);
        }
    };
    
    
    const handleOnAddProgrammingLanguage = () => {
        if(programmingLanguage !== ''){
            setProgrammingLanguages([...programmingLanguages, programmingLanguage])
            setProgrammingLanguage('')
        }
    }

    

    return(
        <div className="flex text-black  flex-row w-full h-full bg-white ">
            
            <div className="flex flex-col px-[20px] py-[20px] overflow-y-scroll h-[90vh]   w-[75%] ">
                <p className="text-[33px]">Portfolio</p>
                <div>
                
                    <p>Project Title</p>
                    <input onChange={(e) => setTitle(e.currentTarget.value)} className="bg-white w-[100%] outline-none py-[5px] rounded-[5px] mt-[5px] ring-gray-600 ring-[0.5px] px-[10px]"/>
                    
                    <p className="mt-[10px]">Project Description</p>
                    <input onChange={(e) => setDescription(e.currentTarget.value)} className="bg-white w-[100%] outline-none py-[5px] rounded-[5px] mt-[5px] ring-gray-600 ring-[0.5px] px-[10px]"/>
                        
                    <p className="mt-[10px]">Project Category</p>
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                     className="outline-none mt-[5px] ring-[1px] ring-gray-500 px-[10px] py-[5px] rounded-[5px]">
                        <option>Select Category</option>
                        {
                            Array.isArray(projectCategories) && projectCategories.map((category) => (
                                <option key={category._id} value={category._id} >{category.name}</option>
                            ))

                        }
                    </select>

                    <p className="mt-[10px]">Programming Languages</p>
                    <div className="flex flex-row space-x-[10px] ml-[10px]">
                        {programmingLanguages.map((language, index) => (
                            <p key={index} className="bg-gray-500 w-fit px-[10px] py-[3px] my-[5px] text-[13px] ring-gray-800 ring-[1px] rounded-[5px]">
                                {language}
                            </p>
                        ))}
                    </div>
                   
                    <div className="flex flex-row items-center justify-center">
                        <input onChange={(e) => setProgrammingLanguage(e.currentTarget.value)} className="bg-white w-[100%] outline-none py-[5px] rounded-[5px] mt-[5px] ring-gray-600 ring-[0.5px] px-[10px]"/>
                        <div onClick={handleOnAddProgrammingLanguage} className="bg-black text-white py-[3px] px-[15px] ring-gray-800 ring-[1px] rounded-[5px]  mt-[2px] ml-[8px]">
                            <p>Add</p>
                        </div>
                    </div>
                    <p className="mt-[10px]">Demo Link</p>
                    <input  onChange={(e) => setDemoLink(e.currentTarget.value)} className="bg-white w-[100%] outline-none py-[5px] rounded-[5px] mt-[5px] ring-gray-600 ring-[0.5px] px-[10px]"/>
                        

                    <p className="mt-[10px]">Github Link</p>
                    <input onChange={(e) => setGithubLink(e.currentTarget.value)} className="bg-white w-[100%] outline-none py-[5px] rounded-[5px] mt-[5px] ring-gray-600 ring-[0.5px] px-[10px]"/>
                        
                    

                    <div onClick={handleAddProject} className="flex flex-row cursor-pointer mt-[20px] ring-[1px] ring-yellow-800 items-center py-[5px] rounded-[5px] justify-center w-[100%] bg-yellow-500 mt-[10px] ">
                        <p>Confirm</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-gray-300 px-[20px] py-[20px] w-[25%] ">
                <div>
                    <p className="text-[22px]">Add Project Category</p>
                    <div className="mt-[10px] flex flex-col">
                        <p>Project Category Name</p>
                        <input onChange={(e) => setAddingCategory(e.currentTarget.value)} className="bg-white outline-none py-[5px] rounded-[5px] mt-[5px] ring-gray-600 ring-[0.5px] px-[10px]"/>
                        <div  onClick={handleAddCategory} className="flex flex-row  cursor-pointer items-center py-[5px] rounded-[5px] justify-center w-[100%] bg-gray-400 mt-[10px] ">
                            <p>Confirm</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rooms;