import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaHardDrive } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../pages/SearchSlice";
import axios from "axios";
import { BsEnvelopeHeartFill } from "react-icons/bs";

function Header() {
  var [Headerdata, setHeaderdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setHeaderdata(response.data);
        
        
      } catch (err) {
        // setError(err.message);
      }
    };

    fetchData();
  }, []);
  const uniqueCategories = [
    ...new Set(Headerdata.map((item) => item.category)),
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  const handCart = () => {
    navigate("/Cart");
  };
  const users = useSelector((state) => state.userInfo.Apparel);
  const handlewish=()=>{
    navigate('/WishList')
  }
  const wishdata = useSelector((state) => state.WishList?.wishlistcart || []);

  return (
    <nav className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center fixed top-0 left-0 w-full z-50 gap-4 md:gap-0">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
      <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
      {uniqueCategories.map((category, index) => (
  <Link
    key={index}
    to={`/${category}`}
    className="hover:text-gray-900 capitalize"
  >
    {category}
  </Link>
))}
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full md:w-auto justify-center md:justify-end">
        <input
          type="text"
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          placeholder="Search for products"
          className="border border-gray-300 rounded-lg px-3 py-1 md:px-4 md:py-2 w-full sm:w-64 md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div>
        <BsEnvelopeHeartFill onClick={handlewish} className="text-xl md:text-2xl text-gray-600 cursor-pointer hover:text-gray-900" />
        <p className="text-xs md:text-sm text-white bg-red-800 right-[90px] top-[20px] px-1 absolute rounded-full">
            {wishdata.length}
          </p>
        </div>
        <div className="relative">
          <FaHardDrive
            className="text-xl md:text-2xl text-gray-600 cursor-pointer hover:text-gray-900"
            onClick={handCart}
          />
          <p className="text-xs md:text-sm text-white bg-red-800 right-[-6px] top-[-6px] px-1 absolute rounded-full">
            {users.length}
          </p>
        </div>
        <button onClick={handleLogout}>
          <FaRegUser className="text-xl md:text-2xl text-gray-600 cursor-pointer hover:text-gray-900" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
