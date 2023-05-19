import { useContext, useEffect, useState } from "react";
import { authContext } from "../../provider/AuthProvider";
import MytoysCard from "./MytoysCard";


const Mytoys = () => {
     const {user} = useContext(authContext);
     const [myProducts, setMyProducts] = useState([])
     // console.log(myProducts)
     // console.log(user)

     useEffect(()=>{
          fetch(`http://localhost:5000/products/mytoys?email=${user?.email}`)
          .then(res => res.json())
          .then(data =>{
               setMyProducts(data)
          })
     }, [user])

     return (
          <div className="overflow-x-auto w-full my-10">
  <table className="table w-full capitalize">
    {/* head */}
    <thead>
      <tr>
        <th>toyName/subcategory</th>
        <th>sellerName/email</th>
        <th>Price</th>
        
      </tr>
    </thead>
    <tbody>
     {
          myProducts.map(myProduct => <MytoysCard
          key={myProduct._id}
          myProduct={myProduct}
          ></MytoysCard>)
     }
      
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </tfoot>
    
  </table>
</div>
     );
};

export default Mytoys;