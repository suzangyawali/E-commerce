/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import imagePlaceholder from "../../assets/img/img_placeholder.jpg";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { deleteProduct } from "../../api/products";
import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/products/productActions";

const ProductsCard = ({ id, name, brand, category, price, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch =useDispatch();
  
  async function removeProduct() {
    setIsOpen(true);
   
  }
  async function confirmDelete() {
      await deleteProduct(id);
      dispatch(getAllProducts());
    toast("Product deleted sucessfully", {
      type: "sucess",
      autoClose: 1500,
    });
  }
  return (
    <div className="py-5 px-6 rounded-xl shadow relative bg-white hover:shadow-xl hover:transition-all flex flex-col justify-around">
      <span className="bg-teal-950 text-xs px-2 py-1 rounded-xl text-white absolute right-4 top-4">
        {category}
      </span>
      <Link to={`${PRODUCTS_ROUTE}/${id}`}>
        <img
          src={url ?? imagePlaceholder}
          alt=""
          className="max-h-60 w-auto mx-auto mb-5"
        />
      </Link>

      <div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{brand}</p>
        <p className="my-3">
          <span className="text-xl mr-1">${Math.floor(price * 0.8)}</span>
          <span className="line-through text-slate-400 text-sm">${price}</span>
        </p>
        <div className="flex justify-between">
          <Link
            to={`${PRODUCTS_ROUTE}/${id}`}
            className="bg-teal-800 px-3 py-1 text-white rounded hover:bg-teal-900"
          >
            Buy Now
          </Link>
          <div className="flex float-left gap-1">
            <Link
              to={`edit/${id}`}
              className="bg-blue-800 px-3 py-1 text-white rounded hover:bg-teal-900"
            >
              <FaPencilAlt />
            </Link>
            <button
              onClick={removeProduct}
              className="bg-red-800 px-3 py-1 text-white rounded hover:bg-red-900"
            >
              <FaTrashAlt />
            </button>
          </div>
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            label="Delete product"
            body={<p>Are you sure you want to delete this product?</p>}
            actions={
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={confirmDelete}
              >
                Confirm
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
