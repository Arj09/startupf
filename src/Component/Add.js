import React from "react";
import { useNavigate } from 'react-router-dom'
import "../App.css"

export const  Add = ()=>{

    const navigate = useNavigate()

    const handleBack = ()=>{
        navigate("/")
    }
    return(
        <>
        <button class='flex flex-row mx-5 my-5 px-6 py-1 bg-red-600 text-white rounded cursor-pointer' onClick={handleBack}>Back</button>
        <form class="flex flex-col mx-auto  border-2 border-slate-100 w-4/5 px-5 pt-5 pb-10 gap-3 rounded my-24 lg:w-2/5 md:w-3/5  "  >
            <text class="flex flex-row justify-center text-slate-900 pb-5 text-2xl">Add Startup data</text>
            <input placeholder="Enter Company Name"  class="border-gray-100 border-2 pl-1" />
            <input placeholder="Enter City"  class="border-gray-100 border-2 pl-1" />
            <input placeholder="Enter Starting Year"  class="border-gray-100 border-2 pl-1" />
            <input placeholder="Enter Founders"  class="border-gray-100 border-2 pl-1" />
            <input placeholder="Enter Industry"  class="border-gray-100 border-2 pl-1" />
            <input placeholder="Enter No of Employees"  class="border-gray-100 border-2 pl-1" />
            <input placeholder="Enter Funding_Amount"  class="border-gray-100 border-2 pl-1" />
            <button class="bg-red-600 text-white px-5 py-1 rounded" >Add data</button>



        </form>
        </>
    )
}