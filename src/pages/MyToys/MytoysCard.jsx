
import { FaTrashAlt } from "react-icons/fa"


const MytoysCard = ({ myProduct, handleDelete}) => {
     
     const {_id, sellerName, toyName, subCategory, price, email, img } =
     myProduct || ''
     

     

  return (
    <>
      <tr className="hover">
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
              <div className="text-sm opacity-50">{subCategory}</div>
            </div>
          </div>
        </td>
        <td>
          {sellerName}
          <br />
          <p className="badge badge-ghost ">{email}</p>
        </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-info btn-xs">Details</button>
        </th>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
               <FaTrashAlt></FaTrashAlt>
          </button>
        </th>
      </tr>
    </>
  )
}

export default MytoysCard
