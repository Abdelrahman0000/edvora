import { useEffect, useState } from "react"

export default function Products({Datas,lod,setcity,setprotected,setstate}){
     
   const [data,setData]=useState();
   const [loading,setLoading]=useState(lod);
   const [add,setAdd]=useState(0);
   useEffect(()=>{
     setData(Datas)
   },[Datas]) 

if(data){
console.log(data)
}
  if (loading) {
    return <p>Data is loading...</p>;
  }
  if(data){
  return(<><h4 className="m-1 p-1 fw-normal border-bottom border-light">Product</h4><div id="carouselExampleControlsNoTouching" className="carousel slide row-4 d-flex justify-content-around m-3 main-bg" data-bs-touch="false" data-bs-interval="false">
  <div className="carousel-inner row m-auto">
  {data.map((item)=>( <div className={`${data[add]===item||data[add+1]===item||data[add+2]===item?"col  d-flex":"d-none"}`}  key={item.date}> {data[add]===item||data[add+1]===item||data[add+2]===item?(<div  key={item.date} onClick={()=>{
    setcity(item.address.city)
    setprotected(item.product_name)
    setstate(item.address.state)
  }} className="card sec-bg d-flex  justify-content-around  m-3 " >
  <div className="row g-0">
    <div className="col-md-4 ">
      <img src={item.image} className="img-fluid m-2 rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body mw-100">
        <h5 className="card-title">{item.product_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.brand_name}</h6>
        <h5 className="fs-6 text-normal">${' '}{item.price}</h5>
        </div>
        </div>
        <div className="row m-1 g-0"><p className="fs-6 fw-100 fw-lighter col p-0 m-0">{item.address.city}</p><p className="fs-6 fw-100 fw-lighter col p-0 m-0">Date:{item.date}</p>
          </div>
           <p className="fs-6 p-0 m-1">{item.discription}</p>
           
            </div>
   
 
</div>):<p className="d-none"></p>} </div>))}

  </div>
  {add>0&&
  <button className="carousel-control-prev r-108"  type="button" onClick={()=>setAdd(add-3)} data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  }
  {data.length>add+3&&
  <button className="carousel-control-next" type="button" onClick={()=>setAdd(add+3)} data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  }
</div></>)
  }
   return<p>...........loading</p>
}
// 