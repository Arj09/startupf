import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import axios from 'axios'


function Home() {

  const [pop, setPop] = useState(true)
  const [data, setData] = useState([])
  const [key, setKey] = useState()
  const [industry, setIndustry] = useState('All')
  const [Search, setSearch] = useState("")
  
  const navigate = useNavigate()

  

  const handlePopup = (index)=>{
    setKey(index)
    setPop(false)
    
  }
  const handleClose= ()=>{
    setPop(true)
  }
  const handleAdd = ()=>{
    navigate("/add")
  }


  const Industry = () => {
    return [...new Set(data.map((data) => data.Industry))];
  };

  const handleIndustry =(e)=>{
    setIndustry(e.target.value)
  }
  


  useEffect(()=>{
    axios.get('https://startup-data.onrender.com/api/data').then((res)=>{
      setData(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  }, [])


  return (
    <>
    <div class="w-4/5  bg-red-600  mx-auto my-2.5 rounded flex flex-row justify-between px-5 h-15 relative   text-center">
        <div  class="py-2">
            <text class='text-white pr-3'>Filter</text>
            
            <select  value={industry} onChange={handleIndustry} >
                <option value="All">All</option>
                {Industry().map((gender1) => {
                  return (
                      <option value={gender1} key={gender1}>
                        {gender1}
                      </option>
                      );
                })}
                
            </select>
        </div>
        <input placeholder=' Search By Startup Name'  className='my-1 rounded px-5 hidden lg:block md:block' value={Search} onChange={(e)=>setSearch(e.target.value)}/>

        <text class='px-10 py-1 bg-blue-400  text-white my-1 rounded cursor-pointer hidden lg:block md:block ' onClick={handleAdd}>Add Startup data</text>
      
    </div>
    <input placeholder=' Search By Startup Name'  className='my-1 rounded px-5 w-4/5 mx-auto flex flex-row py-1.5 border-red-600 border-2 pl-2  md:hidden lg:hidden'  value={Search} onChange={(e)=>setSearch(e.target.value)}/>
    <text class=' w-4/5 z-0 flex flex-row bg-red-600 mx-auto my-1 text-white justify-center px-5 py-2 rounded cursor-pointer  md:hidden lg:hidden ' onClick={handleAdd}>Add Startup data</text>
    <div class="w-screen relative px-1 mx-auto my-2.5  grid grid-cols-1 gap-1   md:grid-cols-2 lg:grid-cols-3 justify-center lg:w-4/5 md:w-4/5 sm:w-4/5 ">
    {
      data.length ? (
      <>
      {
        data && data
        .filter((data)=>(data.Company_Name.toLowerCase().startsWith(Search.toLowerCase())))
        .filter((data)=>(industry === "All" ? data : data.Industry === industry ))
        .map((data, index)=>{
          return(
            <div key={index} className={"w-5/5 relative h-44 bg-blue-400 mx-auto my-4 px-5 flex flex-col align-middle lg:w-4/5 md:w-4/5 sm:w-4/5 " }>
              <text class="text-white pt-5 ">{`Company Name : ${data.Company_Name}`}</text>
              <text class="text-white">{`City Name : ${data.City}`}</text>
              <text class="text-white">{`Starting Year : ${data.Starting_Year}`}</text>
              <text class="text-white">{`Funding Amount : ${data.Funding_Amount}`}</text>
              <text class="text-white flex justify-center cursor-pointer pt-2" onClick={()=>handlePopup(index)}>More Detail</text>
          </div>

          )
        })
      }
      
      </>) : (<div>Data is not available or loading</div>)
    }
    </div>

    {
      !pop ? (
        <div class={"w-2/5 absolute  bg-slate-500 flex flex-col   mx-auto top-44 left-96 "}>
          <text class="flex justify-end cursor-pointer text-white py-2 px-5 text-2xl"   onClick={handleClose}>x</text>
          <div  class=" w-4/5 h-60  mx-auto my-1 px-5 flex flex-col align-middle " >
            <text class="text-white pt-5 ">{`Company Name : ${data[key].Company_Name}`}</text>
            <text class="text-white">{`City Name : ${data[key].City}`}</text>
            <text class="text-white">{`Founders : ${data[key].Founders}`}</text>
            <text class="text-white">{`Starting Year : ${data[key].Starting_Year}`}</text>
            <text class="text-white">{`Funding Amount : ${data[key].Funding_Amount}`}</text>
            <text class="text-white"> {`No of Employees : ${data[key].No_of_Employees}`}</text>
            <text class="text-white">{`Industry : ${data[key].Industry}`}</text>
          </div>
      </div>

      ):(
        <div></div>
      )
    }


    
    
    
    
    
    
    
    
    
    
    
    </>
    
  );
}

export default Home;
