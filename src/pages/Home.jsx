import React, { useEffect, useState } from "react";
import coffe_img from "../assets/MDB8YWNjdF8xT3BaeG5GSmNWbVh6bURsfGZsX3Rlc3RfaDVvWXowdU9ZbWlobUIyaHpNc1hCeDM200NBzvUjqP.avif";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./Userslice";
import axios from "axios";
import { FaGratipay } from "react-icons/fa";
import { toggleWish } from "./wishlistSlice";
import { toast, ToastContainer } from 'react-toastify';

function Home() {
  const [error, setError] = useState(null);
  const [homedata, sethomedata] = useState([]);
  const users = useSelector((state) => state.userInfo.Apparel);
  const wishitem = useSelector((state) => state.WishList.wishlistcart);
  const cartItems = useSelector((state) => state.userInfo.Apparel);
  const dispatch = useDispatch();

 const addUser = (item) => {
     dispatch(setUsers(item));
     toast.success(
       cartItems.some((cartItem) => cartItem.id === item.id)
         ? "Quantity increased in cart"
         : "Added to Cart Successfully"
     );
   };
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        sethomedata(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const isItemInWish = (id) => {
    return wishitem.some((wish) => wish.id === id);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <ToastContainer/>
        <div className="text-center md:text-left md:w-1/2 p-6">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Discover our
          </h1>
          <h1 className="text-5xl font-extrabold text-gray-800">
            Curated Collection
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-md">
            Explore our carefully selected products for your home and lifestyle.
            Quality meets elegance.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl shadow-xl hover:bg-blue-700 transition-all duration-300">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 p-6 flex justify-center">
          <img
            src={coffe_img}
            alt="Coffee"
            className="max-w-xs md:max-w-md h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-10 bg-white">
        {homedata.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden "
          >
            <div className="w-full h-60 bg-gray-50 flex items-center justify-center">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="px-5 pb-5 text-center">
              <h3 className="text-md font-semibold text-gray-800 mt-4 truncate">
                {data.title}
              </h3>
              <div className="flex items-center justify-around mb-[20px]">
                <div>
                  <p className="text-sm text-gray-600 mt-1">
                    Rating: {data.rating.rate} ⭐
                  </p>
                  <p className="text-sm text-gray-500">
                    {data.rating.count > 0
                      ? `Stock: ${data.rating.count} ✅`
                      : "stock:❌"}
                  </p>
                </div>
                <div>
                  <p className="text-blue-600 font-bold text-md mt-2">
                    ${data.price}
                  </p>
                </div>
              </div>
              <div className="px-4 flex pb-4 ">
                <button
                  onClick={() => addHeart(data)}
                  className={`cursor-pointer text-xl mr-2 ${
                    isItemInWish(data.id)
                      ? "text-red-600"
                      : "text-gray-400 "
                  }`}
                  title={
                    isItemInWish(data.id) ? "In Wishlist" : "Add to Wishlist"
                  }
                >
                  <FaGratipay />
                </button>
                <button
                  onClick={() => addUser(data)}
                  className="w-full py-2 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
