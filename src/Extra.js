import React, { useState } from 'react';
import axios from "axios";

function Extra (){

  const [data, setData] = useState([]);
  const getNews = () =>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=c8f03561ca5e4dbcb1f43b4593deff38")
    .then((response) => {
      setData(response.data.articles)
    })
  }

  return (
    <>

    <div className='container my-3'>
      <button className='btn btn-primary' onClick={getNews}>Fetch News</button>
    </div>


    <div className='container'>
      <div className='row'>
        {
          data.map((value) => {
            return(
            <div className='col-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={value.urlToImage} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{value.title}</h5>
            <p className="card-text">{value.description}</p>
            <a href={value.url} className="btn btn-primary">Read more News</a>
          </div>
        </div>
        </div>
            );
          })
        }
      </div>
    </div>
    </>
  );
};

export default Extra