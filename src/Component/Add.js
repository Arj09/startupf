import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../App.css"
import axios from "axios";

export const  Add = ()=>{
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [number, setNumber] = useState(0)

    const handleBack = ()=>{
        navigate("/")
        
    }


    const handleData = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setData(data=>({...data, [name]: value}))

    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        setNumber(number=>number+1)
       
        console.log(data)
        console.log(number)
    }


    useEffect(()=>{
       
        axios.post('http://localhost:5000/api/data', {

            Company_Name : data.Company_Name,
            City: data.City,
            Starting_Year: data.Starting_Year,
            Founders: data.Founders,
            Industry: data.Industry,
            No_of_Employees: data.No_of_Employees,
            Funding_Amount: data.Funding_Amount
        
        }).then((res)=>{
            console.log(res.data)
            navigate("/")
            
        }).catch((err)=>{
            console.log(err)
           
        })
    }, [number])
    return(
        <>
        <button class='flex flex-row mx-5 my-5 px-6 py-1 bg-red-600 text-white rounded cursor-pointer' onClick={handleBack}>Back</button>


        <form onSubmit={handleSubmit} class="flex flex-col mx-auto  border-2 border-slate-100 w-4/5 px-5 pt-5 pb-10 gap-3 rounded my-24 lg:w-2/5 md:w-3/5  "  >
            <text class="flex flex-row justify-center text-slate-900 pb-5 text-2xl">Add Startup data</text>
            <input placeholder="Enter Company Name"  class="border-gray-100 border-2 pl-1"  name="Company_Name" value={data.Company_Name}  onChange={handleData}/>
            <input placeholder="Enter City"  class="border-gray-100 border-2 pl-1"  name="City" value={data.City} onChange={handleData} />
            <input placeholder="Enter Starting Year"  class="border-gray-100 border-2 pl-1"  name="Starting_Year" value={data.Starting_Year} onChange={handleData}/>
            <input placeholder="Enter Founders"  class="border-gray-100 border-2 pl-1" name="Founders" value={data.Founders} onChange={handleData} />
            <input placeholder="Enter Industry"  class="border-gray-100 border-2 pl-1" name="Industry"  value={data.Industry}  onChange={handleData}/>
            <input placeholder="Enter No of Employees"  class="border-gray-100 border-2 pl-1"  name="No_of_Employees" value={data.No_of_Employees} onChange={handleData} />
            <input placeholder="Enter Funding Amount"  class="border-gray-100 border-2 pl-1" name="Funding_Amount" value={data.Funding_Amount} onChange={handleData} />
            <button class="bg-red-600 text-white px-5 py-1 rounded" >Add data</button>



        </form>
        </>
    )
}