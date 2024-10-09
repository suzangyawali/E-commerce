import { Link, useParams } from "react-router-dom";
import Title from "../../components/Title";
import ProductsForm from "../../components/products/Form";
import { FaArrowLeft } from "react-icons/fa";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { getProductsById } from "../../api/products";
import { toast } from "react-toastify";
const EditProduct = () => {
    const [loading,setLoading] = useState(true);
    const  [product,setProduct]=useState(null);
    const params = useParams();

    useEffect(()=>{
    getProductsById(params.id).then((response)=>{
          setProduct( response.data);
        }).catch((error)=>{
         toast(error.response.data,{
            type:"error",
            autoClose:false,
         })
        }).finally(()=>{
            setLoading(false);
        })
      },[params.id]);
      console.log("PRODUCT",product); 

      if(loading) return (<div className="flex items-center justify-center h-[90vh]">
      <Spinner className="h-16 w-16" />
    </div>
    );
  return <div>
    
   <div className="my-4">
   <Link to={PRODUCTS_ROUTE} className="mx-10 bg-teal-700 text-white  w-20 px-3 py-2 rounded flex items-center gap-2">
    <FaArrowLeft/> Back</Link>

 
   <div><Title label="Edit Product"/></div>

   </div>
    <ProductsForm product={product}/>
  </div>;
};

export default EditProduct;


