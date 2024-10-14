import { useEffect } from "react";
import { deleteProduct, getProducts } from "../../api/products";
import Title from "../../components/Title";
import Card from "../../components/products/Card";
import { Link } from "react-router-dom";
import ProductsLoader from "../../components/products/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsByCategories } from "../../redux/products/productActions";
import { toast } from "react-toastify";
import ProductsFilter from "../../components/products/Filter";




const ProductList = () => {
  const { loading, error, products,query } = useSelector((state) => state.product);

  const dispatch = useDispatch();
 
  useEffect(()=>{
    
     dispatch(getAllProducts(query));
     dispatch(getAllProductsByCategories());
  },[dispatch,query]);

  return (
  <section className="relative">
    <Title label="New Arrivals"/>
    <div className="max-w-screen-xl flex justify-end px-4 ml">
       <Link to="add" className="bg-teal-700 rounded px-2 py-2 text-white">Add Product</Link>
   </div>
   
   <ProductsFilter/>
   <div className="py-8">
   
    {
      loading?
      <ProductsLoader/>: <div className="max-w-screen-xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
      {products.map((product)=>(
        <Card key={product._id} id={product._id} {...product}/>
      ))}
    </div>
    }
   </div>
   
  </section>
  )
}

export default ProductList;
