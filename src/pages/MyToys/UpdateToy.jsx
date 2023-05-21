import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateToy = () => {
  const product = useLoaderData()
//   console.log(product)
  const {_id, price, availableQuantity, detailDescription } = product || '';

     const handleUpdate = event =>{
          event.preventDefault()
          const form = event.target;
          const price = form.price.value;
          const availableQuantity = form.availableQuantity.value;
          const detailDescription = form.detailDescription.value;
          const data= {
               price,
               availableQuantity,
               detailDescription
          }
          fetch(`https://teddy-toy-server-saidur-way.vercel.app/products/${_id}`, {
               method: "PATCH",
               headers: {
                    "content-type": "application/json"
               },
               body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.modifiedCount > 0){
                    Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: 'Toy has been Updated',
                         showConfirmButton: false,
                         timer: 2000,
                       })
               }
          })
     }

  return (
    <div className='w-1/2 mx-auto py-10'>
          <h2 className='py-2 text-2xl font-bold text-center'>Update Your Toy Information</h2>
      <form onSubmit={handleUpdate}>
        <div className='md:flex gap-4'>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            min="0"
            name="price"
            defaultValue={price}
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            min="0"
            name="availableQuantity"
            defaultValue={availableQuantity}
            placeholder="Quentity"
            className="input input-bordered"
          />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail Description</span>
          </label>
          <textarea name='detailDescription' defaultValue={detailDescription} className="textarea textarea-info" placeholder="Add a Toy Description"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn border-none bg-sky-500 hover:bg-sky-700  ">Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateToy
