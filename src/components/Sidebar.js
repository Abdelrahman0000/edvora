import { useState,useEffect } from "react";

export default function Sidebar({mycity,mystate,myprotected,Datas}){
  const [data,setData]=useState();
  useEffect(()=>{
    setData(Datas)
  },[Datas]) 
    return (<div className="card  d-flex justify-content-start  rounded w-258 main-bg card-first text-light" >
   
    <div className="card-body">
      <h5 className="card-title p-3 mb-4 border-bottom border-light ">Filters</h5>
      <select className=" sec-bg   text-light border border-dark form-select form-select-lg  mb-3" aria-label=".form-select-lg example">
  <option defaultValue>{myprotected}</option>

  {data&&data.map((item)=>( <option value={item.product_name} key={item.date}>{item.product_name}</option>))}
</select>
<select className="sec-bg text-light  border border-dark  form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option defaultValue>{mystate}</option>
  {data&&data.map((item)=>(<option value={item.address.state} key={item.date}>{item.address.state}</option>))}

  
</select>
<select className="sec-bg  text-light border border-dark  form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option defaultValue>{mycity}</option>
  {data&&data.map((item)=>(<option value={item.address.city} key={item.date}>{item.address.city}</option>))}

  </select>

  </div>
  </div>)
}