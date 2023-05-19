

const ToysCard = ({product, index}) => {
     // console.log(product)
  return (
    <>
      <tr  className="hover">
        <th>{index+1}</th>
        <td>Sophi Biles</td>
        <td>Recruiting Manager</td>
        <td>Gutmann Inc</td>
        <td>Indonesia</td>
        <td>Indonesia</td>
        <td><button className="btn btn-info btn-sm">View Details</button></td>
      </tr>
    </>
  )
}

export default ToysCard
