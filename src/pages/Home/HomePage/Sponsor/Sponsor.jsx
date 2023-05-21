import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const Sponsor = () => {
  const [sopnsorLogo, setSponsorLogo] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/news/sponsor')
      .then((res) => res.json())
      .then((data) => {
        setSponsorLogo(data)
      })
  }, [])
  return (
     <>
    <div className='my-20  bg-base-200  py-10'>
     <h2 className='text-5xl font-bold text-center pb-20'>Sponsored Company</h2>
     
     <Marquee pauseOnHover>
      <div
      className='flex items-center justify-center g-4'
      
      >
        {sopnsorLogo.map((logo) => (
          <div  key={logo._id} className='px-10  '>
          <Link  className="">
            <img
              width={200}
              height={200}
              src={logo.teddyBearCompanyLogo}
              alt=""
            />
          </Link>
          </div>
        ))}
      </div>
        </Marquee>
    </div>
    
    </>
  )
}

export default Sponsor
