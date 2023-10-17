import { faTelevision } from"react-icons/fa";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function News () {
    /*let [title, description, imageUrl] = this.props;*/
    let [value, setValue] = useState("Yes");

    async function ne(){
        let response= await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=c8f03561ca5e4dbcb1f43b4593deff38");
        let result = await response.json();
        console.log(result);
        console.log(result.articles);
        let p = result.articles.map((a) => {
          return (
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={a.urlToImage} alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          <div class="px-6 pt-4 pb-2">  
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
      </div>
      );
    })
    console.log(p);
    setValue(p);
    };

    ne();    

  return (
     <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">   
           <h1>I am happy {value}</h1>
      </div>
  );
};

export default News;