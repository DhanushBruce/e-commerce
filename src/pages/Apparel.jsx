import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./Userslice";
import { FaGratipay } from "react-icons/fa";
import { toggleWish } from "./wishlistSlice";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaSyncAlt } from "react-icons/fa";
function Apparel() {
  const [apparel, setApparel] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.term);
  const cartItems = useSelector((state) => state.userInfo.Apparel);
  const wishitem = useSelector((state) => state.WishList.wishlistcart);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setApparel(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchData();
    }
  }, [category]);

  const addUser = (item) => {
    dispatch(setUsers(item));
    toast.success(
      cartItems.some((cartItem) => cartItem.id === item.id)
        ? "Quantity increased in cart"
        : "Added to Cart Successfully"
    );
  };

  const addHeart = (item) => {
    const isAlreadyInWish = wishitem.some(
      (wishitem) => wishitem.id === item.id
    );

    dispatch(toggleWish(item));

    toast.success(
      isAlreadyInWish
        ? "Removed from wishlist"
        : "Added to wishlist successfully"
    );
  };

  const filteredApparel = apparel.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const isItemInWish = (id) => {
    return wishitem.some((wish) => wish.id === id);
  };
  return (
    <div className="container mx-auto px-4 py-20">
      <ToastContainer />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 capitalize">
          men's clothing
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Shop our latest fashion collection
        </p>
      </div>

      {loading ? (
        <div className="text-center justify-center flex items-center text-lg text-gray-600">Loading... <FaSyncAlt className="text-sm" /></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredApparel.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full p-4"
                />
              </div>
              <div className="p-4 flex-grow text-center ">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-around">
                  <div>
                    <p className="text-sm text-gray-600 mt-1">
                      Rating: {item.rating.rate} ⭐
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.rating.count > 0
                        ? `Stock: ${item.rating.count} ✅`
                        : "Stock:❌"}
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-600 font-bold text-md mt-2">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 flex pb-4">
                <button
                  onClick={() => addHeart(item)}
                  className={`cursor-pointer text-xl mr-2 ${
                    isItemInWish(item.id) ? "text-red-600" : "text-gray-400"
                  }`}
                  title={
                    isItemInWish(item.id)
                      ? "Remove from Favorites"
                      : "Add to Favorites"
                  }
                >
                  <FaGratipay />
                </button>
                <button
                  onClick={() => addUser(item)}
                  className="w-full py-2 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Apparel;
