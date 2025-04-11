
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./Userslice";
import { deleteWish } from "./wishlistSlice";

function WishList() {
  const wishdata = useSelector((state) => state.WishList?.wishlistcart || []);

  const dispatch=useDispatch()
  const deleteuse=(index)=>{
    dispatch(deleteWish(index))
  }
  return (
    <div className="max-w-4xl mx-auto mt-[60px] p-4">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

      {wishdata.length === 0 ? (
        <p className="text-gray-500 text-center">Your wishlist is empty.</p>
      ) : (
        wishdata.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 mb-6 border border-gray-200"
          >
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left text-sm font-semibold text-gray-700">
                    Product
                  </th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">
                    <img
                      src={item.image}
                      alt="wishlist item"
                      className="h-16 w-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="p-3 text-green-600 font-medium">
                    ₹{item.price}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg text-sm transition">
                        Pay Now
                      </button>
                      <button onClick={()=>deleteuse(index)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}

export default WishList;
