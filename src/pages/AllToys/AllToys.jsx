import { useLoaderData } from "react-router-dom";
import ToysCard from "./ToysCard";


const AllToys = () => {
     const products = useLoaderData();
     console.log(products)
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
      {
        products.map((product, index) => <ToysCard
        key={product._id}
        product={product}
        index={index}
        ></ToysCard>)
      }
    </tbody> 
    <tfoot>
      <tr>
        <th>Num</th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
      </tr>
    </tfoot>
  </table>
</div>
     );
};

export default AllToys;