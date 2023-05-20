import { useContext, useEffect, useState } from "react";
import { authContext } from "../../provider/AuthProvider";
import MytoysCard from "./MytoysCard";
import Swal from "sweetalert2";


const Mytoys = () => {
     const {user} = useContext(authContext);
     const [myProducts, setMyProducts] = useState([])
     // console.log(myProducts)
     console.log(user)

     useEffect(()=>{
          fetch(`http://localhost:5000/products/mytoys?email=${user?.email}`)
          .then(res => res.json())
          .then(data =>{
               setMyProducts(data)
          })
     }, [user])

     const handleDelete = id =>{

          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
             }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`http://localhost:5000/products/${id}`, {
                         method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                         console.log(data)
                         if(data.deletedCount > 0){
                              Swal.fire(
                                   'Deleted!',
                                   'Your file has been deleted.',
                                   'success'
                                 )
                                 const remaining = myProducts.filter( pd => pd._id !== id)
                                 setMyProducts(remaining);
                         }
                         
                    })
               }
             })

          
     }

     return (
          <div className="overflow-x-auto w-full my-10">
  <table className="table w-full capitalize">
    {/* head */}
    <thead>
      <tr>
        <th>toyName/subcategory</th>
        <th>sellerName/email</th>
        <th>Price</th>
        <th>availableQuantity</th>
        
      </tr>
    </thead>
    <tbody>
     {
          myProducts?.map(myProduct => <MytoysCard
          key={myProduct._id}
          myProduct={myProduct}
          handleDelete={handleDelete}
          ></MytoysCard>)
     }
      
    </tbody> 
  </table>
</div>
     );
};

export default Mytoys;