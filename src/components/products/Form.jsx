import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { addProduct, editProduct } from "../../api/products";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import Spinner from "../Spinner";

const ProductsForm = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    values: product ?? {},
  });

  const { errors } = formState;
  const navigate = useNavigate();

  console.log("Ayo", product);

  const isEditing = product ? true : false;
  async function submitForm(data) {
    setLoading(true);
    if (!data.url) delete data.url;
    try {
      if (isEditing) {
        await editProduct(product._id, data);
      } else {
        await addProduct(data);
      }
      toast(`Product ${isEditing ? "edited" : "updated"} sucessfully`, {
        type: "success",
        autoClose: 1500,
      });
      navigate(PRODUCTS_ROUTE);
    } catch (error) {
      console.log("Check:", error.response.data);
      toast(error.response.data, {
        type: "error",
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="mx-auto md:w-1/2  border bg-slate-50 py-8 px-12 rounded"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="py-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("name", {
            required: "Name is required",
          })}
        />
        <p className="text-red-500 text-md ml-2 mt-2">{errors.name?.message}</p>
      </div>
      <div className="py-1">
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("brand", {
            required: "Brand is required",
          })}
        />
        <p className="text-red-500 text-md ml-2 mt-2">
          {errors.brand?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("category", {
            required: "Category is required",
          })}
        />
        <p className="text-red-500 text-md ml-2 mt-2">
          {errors.category?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("price", {
            required: "price is required",
            min: {
              value: 0,
              message: "Price must be positive value",
            },
          })}
        />
        <p className="text-red-500 text-md ml-2 mt-2">
          {errors.price?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="url">Image URL</label>
        <input
          type="url"
          id="url"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("url")}
        />
      </div>
      <div className="mt-5 text-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-teal-700 text-white rounded px-5 py-1 cursor-pointer flex items-center mx-auto disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isEditing ? "Edit Product" : "Add Product"}
          {loading ? <Spinner className="h-[1.2rem] w-[1.2rem] ml-1" /> : null}
        </button>
      </div>
    </form>
  );
};

export default ProductsForm;
