
const Banner = () => {
  
  return (
    <div className='mb-10'>
      <div
        className="hero min-h-screen rounded-b-lg  "
        data-aos="zoom-in"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url("https://i.ibb.co/rHMSHqY/teddycover3.jpg")`,
          
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center  text-neutral-content ">
          <div className="max-w-md pt-40 " data-aos="fade-up"
     data-aos-duration="2000">
            <h1 className="mb-5 text-6xl font-bold text-sky-300"> Discover a World of Teddy Bear Wonders</h1>
            <p className="mb-5">
            TeddyWorld is a whimsical and enchanting destination dedicated to the love and magic of teddy bears.Immerse yourself in the wonder of TeddyWorld and discover a world where imagination takes flight, and where cherished memories are made with every hug.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
