
import { Link } from 'react-router-dom';

const NewsCard = ({tnews, index}) => {
     const {comment, img, news, teddyName
, teddyBearCompanyLogo } = tnews;
// console.log(tnews)

     return (
          
               <div

               id= {index + 1} className="carousel-item  space-x-4">
          <div className="carousel-item">
            <div className="card w-96 bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title">{teddyName}</h2>
                <div className="flex">
                  <p className="text-purple-600">Bookmark</p>
                  <p className="text-purple-600">Comment</p>
                </div>
                <p>
                  {
                    news
                  }
                  <Link className="text-info">...ShowMore</Link>
                </p>
              </div>
              
                <div data-aos="zoom-out" data-aos-duration="2000" className="h-52 overflow-hidden">
                    <img width={300} height={200} src={img} alt="Shoes" className=' mx-auto' /></div>
              
            </div>
          </div>
        </div>
     );
};

export default NewsCard;