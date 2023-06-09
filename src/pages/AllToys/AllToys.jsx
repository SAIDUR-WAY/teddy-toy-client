import { useLoaderData } from 'react-router-dom'
import ToysCard from './ToysCard'
import useTitle from '../../hooks/useTitle'

const AllToys = () => {
  const products = useLoaderData()
  useTitle('AllToys')
  // console.log(products)
  return (
    <div className="overflow-x-auto  md:w-11/12 mx-auto shadow-2xl my-10">
      <table className="table overflow-scroll w-full">
        <thead>
          <tr>
            <th>Num</th>
            <th>SellerName</th>
            <th>ToyName</th>
            <th>SubCategory</th>
            <th>Price</th>
            <th>Available Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ToysCard
              key={product._id}
              product={product}
              index={index}
            ></ToysCard>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Num</th>
            <th>SellerName</th>
            <th>ToyName</th>
            <th>SubCategory</th>
            <th>Price</th>
            <th>Available Quantity</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default AllToys
