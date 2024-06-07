import React,{ useEffect, useState } from 'react'
import Newsitems from './newsitems.jsx';

const Newsboard = ({category}) => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apikey=4be6f866d57440e48359dc7c50a58333`;
    fetch(url).then(response=> response.json()).then(data=>setData(data.articles));
  },[category]);



  return (
    <div>
      <div><div><h1 className="text-center fs-1 mx-2 my-2 px-2 py-2">Latest <span className="badge bg-danger fs-2 ">News</span></h1></div></div>
      {data.map((data,index)=>{
        return <Newsitems key={index} title={data.title} description={data.description} src={data.urlToImage} url={data.url}/>
      })}
    </div>
  );
}

export default Newsboard
