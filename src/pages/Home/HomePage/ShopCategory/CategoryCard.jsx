import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { authContext } from "../../../../provider/AuthProvider"
import Swal from "sweetalert2"

const CategoryCard = ({category}) => {
     // console.log(category)
     const navigate = useNavigate()
     const {user} = useContext(authContext);

     const handleViewDetails = ()=>{

      if(!user){
        Swal.fire({
          title: 'Do you want to login?',
          text: "You must login to view toy details.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/viewdetails/${_id}`, {replace: true})
          }
        })
      }else{
        navigate(`/viewdetails/${_id}`, {replace: true})
      }
      
     }

     const {_id, img, price , toyName, rating} = category
  return (
    
      <div className="card w-full  bg-base-100 shadow-xl border border-base-300">
        <figure>
          <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {toyName}</h2>
          <p className="text-left">Price: {price}</p>
          <p className="text-left">Ratings: {rating}</p>
          <div className="card-actions justify-end">
            <button onClick={handleViewDetails} className="btn btn-info btn-sm ">
              
              View Details
              {/* <Link to={`/viewdetails/${_id}`}>View Details</Link> */}
              
              </button>
            
          </div>
        </div>
      </div>
    
  )
}

export default CategoryCard
