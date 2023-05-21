
const Gallery = () => {
  
     return (
          <div>
               <div className="w-1/2 mx-auto text-center">
                    <h2 className="text-5xl pb-4">Gallery</h2>
                    <p className="pb-2"> Explore the enchanting world of Teddy, where cuddles and memories are made to last a lifetime.</p>
               </div>
               <div className="container mx-auto px-5 py-2 lg:px-32 ">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/9qL4vps/gallery2.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/X74jkC7/gallery3.jpg" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/DR6qJW1/gallery5.webp" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/DR6qJW1/gallery5.webp" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/Jv7nM6r/pngegg.png" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/xqw12ZY/teddy6.jpg" />
      </div>
    </div>
  </div>
</div>
          </div>
     );
};

export default Gallery;