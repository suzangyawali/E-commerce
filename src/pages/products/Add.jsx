import { Link } from "react-router-dom";
import Title from "../../components/Title";
import ProductsForm from "../../components/products/Form";
import { FaArrowLeft } from "react-icons/fa";
import { PRODUCTS_ROUTE } from "../../constants/routes";

const AddProduct = () => {
   
  return <div>
    
   <div className="my-4">
   <Link to={PRODUCTS_ROUTE} className="mx-10 bg-teal-700 text-white  w-20 px-3 py-2 rounded flex items-center gap-2">
    <FaArrowLeft/> Back</Link>

   <Title label="Add Product"/>
   </div>
    <ProductsForm/>
  </div>
};

export default AddProduct;


