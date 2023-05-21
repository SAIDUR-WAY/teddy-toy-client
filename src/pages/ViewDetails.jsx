import { useLoaderData } from 'react-router-dom'

const ViewDetails = () => {
  const toyProduct = useLoaderData()
  // console.log(toyProduct)
  const {_id, sellerName, toyName, rating,  price, email, img, detailDescription, availableQuantity } =
  toyProduct || ''

  return (
    <div className="flex-col md:flex-row card card-side bg-base-100 shadow-xl my-10 border border-base-300">
      <figure className='max-h-screen w-1/2'>
        <img className=' w-full max-h-full object-contain'
          src={img}
          alt="photo"
        />
      </figure>
      <div className="card-body capitalize">
        <div>
        <div className='pb-10 border border-b-slate-600 p-4'>
        <h2 className="card-title pb-2">Seller Name: {sellerName}</h2>
        <p>Seller Email: {email}</p>

        </div>
        <div className='border border-b-slate-600 space-y-2 p-4  pb-10'>
        <h2 > <span className="font-bold">Toy Name:</span>  {toyName}  </h2>
        <p><span className='font-bold'>Price: </span>{price} </p>
        <p><span className='font-bold'>Rating: </span>{rating} </p>
        <p><span className='font-bold'>Available Quantity: </span>{availableQuantity} </p>

        </div>
        <div className='border border-b-slate-600 p-4  pb-10'>
        <h2 className="card-title pb-4">Description</h2>
        <p className='bg-slate-200 rounded border-2  border-l-info p-10'>
          {detailDescription}
        </p>


        </div>
        </div>
      </div>
    </div>
  )
}

export default ViewDetails
