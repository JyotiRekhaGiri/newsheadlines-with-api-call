import './App.css';
import { useState,useEffect } from 'react';
import axios from "axios";
import Extra from './Extra';

function App() {

  const [news, setNews ] = useState([]);

  useEffect(() => {
    /*const cachedData = localStorage.getItem('cachedNewsData');
    if (cachedData){
      setNews(JSON.parse(cachedData));
    } else{*/
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=c8f03561ca5e4dbcb1f43b4593deff38")
    .then((response)=>{
      console.log(response.data.articles);
      setNews(response.data.articles);
     /* const articles = response.data.articles;
      localStorage.setItem('cachedNewsData', JSON.stringify(articles));*/
    })
   /* .catch((error) => {
      console.error("Error fetching news data:", error);
    });*/
  }
  /*},[]*/);
  return (
    <div>
      {/*<Extra/>*/}
     <h1>Top Headlines</h1>
      <div className='container my-5'>
        <div className='row text-center'>
         
             {news.map((val) => {
                 return(
                  <div className='col-12 col-md-4' key={val.title}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg my-3">
                    <img className="w-full" src={val.urlToImage} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{val.title}</div>
                      <p className="text-gray-700 text-base">
                       {val.description}
                      </p>
                     <a href={val.url}>See More</a>
                      
                    </div>
                    <div className="px-6 pt-4 pb-2">  
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
                  </div>
                  </div>
                 );
              })
             }
          
        </div>
            </div>
      
            </div>
  );
}

export default App;
