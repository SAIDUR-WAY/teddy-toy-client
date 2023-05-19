

const ToysCard = ({product, index}) => {
     // console.log(product)
     const { sellerName, toyName, subCategory, price, email, img,availableQuantity} =
     product || ''
  return (
    <>
      <tr  className="hover">
        <th>{index+1}</th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td><button className="btn btn-info btn-sm">View Details</button></td>
      </tr>
    </>
  )
}

export default ToysCard
