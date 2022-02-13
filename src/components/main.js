import Sidebar from "./Sidebar"
import Products from "./Products"
import { useState,useEffect } from "react";

export default function Main (){
const [mydata,setData]=useState()
const [mystate,setstate]=useState('State')
const [mycity,setcity]=useState('City')
const [myprotected,setprotected]=useState('Protected')
const [loading,setLoading]=useState(false)
    useEffect(() => {
        fetch("https://assessment-edvora.herokuapp.com/")
          .then((res) => res.json())
          .then((datas) => {
            setData(datas);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    
return(
<div className="  d-block d-sm-flex sm-flex-wrap flex-nowrap justify-content-between  ">
    <div className="sm-col-3">

    <Sidebar  mycity={mycity} mystate={mystate} myprotected={myprotected} Datas={mydata} />

</div>
<div className="sm-col-9 row p-0 m-0 d-flex justify-content-end ">
    <div className="row-3 flex  "><h1>Edvora</h1>
    <h3 className="fw-lighter text-light">products</h3>
    </div>
   <Products Datas={mydata} lod={loading} setcity={setcity} setprotected={setprotected} setstate={setstate}  />
    <Products  Datas={mydata} lod={loading}  setcity={setcity} setprotected={setprotected} setstate={setstate} />
</div>

</div>

)

}
