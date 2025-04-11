
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './Userslice';
function Cart() {
  const users = useSelector((state) => state.userInfo.Apparel);

  
  const [data, setData] = useState(users);

  useEffect(() => {
    const updatedUsers = users.map((item) => ({
      ...item,
      quantity: item.quantity || 1, 
    })); 
    setData(updatedUsers);
  }, [users]);

  // Increment quantity
  const handleIncrement = (index) => {
    const newData = [...data];
    newData[index].quantity += 1;
    setData(newData);
    dispatch(updateQuantity({ index, quantity: newData[index].quantity }));
  };

  // Decrement quantity
  const handleDecrement = (index) => {
    const newData = [...data];
    if (newData[index].quantity > 1) {
      newData[index].quantity -= 1;
      setData(newData);
      dispatch(updateQuantity({ index, quantity: newData[index].quantity }));
    }
  };


  const dispatch=useDispatch()
  const deleteuse=(index)=>{
    dispatch(deleteUser(index))
  }
  // const totalPrice = data.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );

  return (
    
    <div className="overflow-x-auto p-4 m-[70px]">
      <h2 className="text-2xl font-bold mb-6">My Cart</h2>
      {data.length===0?(
        <p className='text-gray-500 text-center'> Your Cart is empty.</p>
      ):(
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">product</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Price</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Quantity</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
              <td className="px-6 py-4 text-sm text-gray-900">${item.price}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </button>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm">Pay Now</button>
                  <button onClick={() => deleteuse(index)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      
    </div>
  );
}

export default Cart;
