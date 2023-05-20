import { Link } from "react-router-dom"

const CategoryCard = ({category}) => {
     // console.log(category)
     const {_id, img, price , toyName, rating} = category
  return (
    
      <div className="card w-full  bg-base-100 shadow-xl border border-base-300">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {toyName}</h2>
          <p className="text-left">Price: {price}</p>
          <p className="text-left">Ratings: {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info btn-sm "><Link to={`/viewdetails/${_id}`}>View Details</Link></button>
            
          </div>
        </div>
      </div>
    
  )
}

export default CategoryCard
