import { useContext } from 'react'
import { authContext } from '../../provider/AuthProvider'
import Swal from 'sweetalert2'

const AddToys = () => {
  const { user } = useContext(authContext)
  // console.log(user)

  const handleAddToySubmit = (event) => {
    event.preventDefault()

    const form = event.target
    const sellerName = form.sellerName.value
    const email = form.email.value
    const toyName = form.toyName.value
    const price = form.price.value
    const rating = form.rating.value
    const url = form.url.value
    const subCategory = form.subCategory.value
    const availableQuantity = form.availableQuantity.value
    const detailDescription = form.detailDescription.value
    const data = {
      sellerName,
      email,
      toyName,
      price: +price,
      rating: +rating,
      img: url,
      subCategory,
      availableQuantity: +availableQuantity,
      detailDescription,
    }
    // console.log(data)
    fetch('https://teddy-toy-server-saidur-way.vercel.app/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Toy has been saved',
            showConfirmButton: false,
            timer: 2000,
          })
        }
      })
  }

  return (
    <div className="min-h-screen bg-blue-100 my-10">
      <h2 className="text-5xl text-center text-info pt-4">
        Fill the form information
      </h2>
      <div className="hero">
        <div className="hero-content  w-full md:w-5/6">
          <div className="card w-full shadow-2xl border border-base-300">
            <form onSubmit={handleAddToySubmit} className="card-body">
              <div className="md:flex gap-4">
                <div className="form-control basis-full md:basis-2/4">
                  <label className="label">
                    <span className="label-text text-base">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    name="sellerName"
                    defaultValue={user?.displayName}
                    required
                    placeholder="Seller Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control md:basis-full">
                  <label className="label">
                    <span className="label-text text-base">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    defaultValue={user?.email}
                    disabled
                    placeholder="email"
                    required
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="md:flex gap-4">
                <div className="form-control md:basis-2/4">
                  <label className="label">
                    <span className="label-text text-base">Toy Name</span>
                  </label>
                  <input
                    type="text"
                    name="toyName"
                    required
                    placeholder="Toy Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control md:basis-2/4">
                  <label className="label">
                    <span className="label-text text-base">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    min="0"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control md:basis-2/4">
                  <label className="label">
                    <span className="label-text text-base">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    min="0"
                    max="5"
                    
                    placeholder="Rating"
                    required
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="md:flex gap-4">
                <div className="form-control md:basis-1/2">
                  <label className="label">
                    <span className="label-text text-base">Toy Photo url</span>
                  </label>
                  <input
                    type="url"
                    name="url"
                    required
                    placeholder="Toy Photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-base">SubCategory</span>
                  </label>
                  <select name="subCategory" className="select w-full max-w-xs"  defaultValue="cats">
                    <option disabled >
                      Select a Category
                    </option>
                    <option value="cats">Cats</option>
                    <option value="dinosaur">Dinosaur</option>
                    <option value="horse">Horse</option>
                  </select>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-base">
                      Available Quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    name="availableQuantity"
                    placeholder="Available Quantity"
                    required
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-base">
                    Detail Description
                  </span>
                </label>
                <textarea
                  className="textarea textarea-info"
                  name="detailDescription"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-none bg-sky-500 hover:bg-sky-700 ">
                  Add a Toy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToys
