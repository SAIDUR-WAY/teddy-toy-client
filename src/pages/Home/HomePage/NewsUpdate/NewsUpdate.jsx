import { useEffect, useState } from 'react'

import NewsCard from './NewsCard'

const NewsUpdate = () => {
  const [toyNews, setToyNews] = useState([])
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  console.log(screenSize)
//   console.log(toyNews)

  useEffect(() => {
    fetch('https://teddy-toy-server-saidur-way.vercel.app/news')
      .then((res) => res.json())
      .then((data) => {
        setToyNews(data)
      })
  }, [])

  return (
    <div className="my-10">
      <div className="divider"></div>
      <h2 className="text-5xl font-bold text-center uppercase pb-8">
        News And Update
      </h2>
      <div className="divider"></div>
      <div className="carousel  rounded-box w-full mx-auto">
        {
          toyNews.map((tnews, index) => <NewsCard
          key={tnews._id}
          index={index}
          tnews={tnews}
          
          ></NewsCard>)
        }
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#1" className="btn btn-xs">1</a>
        {(screenSize < 768) &&
          <>
     <a href="#2" className="btn btn-xs">2</a>
        <a href="#3" className="btn btn-xs">3</a>
        <a href="#5" className="btn btn-xs">5</a>
     
     <a href="#6" className="btn btn-xs">6</a>
        
        </>
        
        }

        
        
        
        <a href="#4" className="btn btn-xs">4</a>

        
        <a href="#7" className="btn btn-xs">7
        </a>
      </div>
    </div>
  )
}

export default NewsUpdate
