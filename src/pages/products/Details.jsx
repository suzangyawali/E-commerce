import products from "../../data"; 
import { FaArrowLeft, FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import jacket from "../../assets/img/jacket.png";
import Title from "../../components/Title";
import { FaExpand,FaHeart,FaShare } from 'react-icons/fa'; 
import { Link, useParams} from "react-router-dom";
import { getProductsById } from "../../api/products";
import {useState,useEffect} from "react";
import { PRODUCTS_ROUTE } from "../../constants/routes";
import Spinner from "../../components/Spinner";

const ProductDetails = () => {
    const [loading,setLoading] = useState(true);
    const  [product,setProduct]=useState(null);
    const params = useParams();
    console.log(params);

    useEffect(()=>{
    getProductsById(params.id).then((response)=>{
          console.log(response.data)
          setProduct( response.data);
          setLoading(false);
    
        }).catch((error)=>{
          console.error("Error fetching products:", error);
        })
      },[params.id]);
      if(loading) return (<div className="flex items-center justify-center h-[90vh]">
      <Spinner className="h-16 w-16" />
    </div>
    );
      
return (
<section className="max-w-screen-xl mx-auto container px-4 py-12 bg-gradient-to-br from-teal-50 to-orange-50 border border-red-700 rounded-md">
<Link to={PRODUCTS_ROUTE} className="mx-10 bg-teal-600 text-white  w-20 px-3 py-2 rounded flex items-center gap-2">
    <FaArrowLeft/> Back</Link>
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-around gap-8">
      <div className="md:w-1/2 relative group">
        <img
          src={product.url ?? jacket}
          alt={product.name}
          className="w-full max-h-[80vh] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaExpand className="text-teal-600" />
        </div>
      </div>
      <div className="md:w-1/2 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex text-orange-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
            <span className="ml-2 text-gray-600 text-sm">(4.5/5 - 123 reviews)</span>
          </div>
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-red-500 transition-colors duration-300">
              <FaHeart />
            </button>
            <button className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
              <FaShare />
            </button>
          </div>
        </div>
        <Title label={product.name} className="text-3xl font-bold text-gray-800" />
        <p className="font-semibold uppercase text-teal-700">{product.brand}</p>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          molestias eum dolores maxime? Exercitationem, dignissimos
          voluptas. Quis fugit distinctio dolores rem temporibus quibusdam
          voluptas magnam quisquam suscipit? Quisquam, libero! Minus.
        </p>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-teal-700">
            ${Math.floor(product.price * 0.8)}
          </span>
          <span className="line-through text-gray-400 text-lg">
            ${product.price}
          </span>
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
            20% OFF
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-lg">
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors duration-300">-</button>
            <span className="px-3 py-1">1</span>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors duration-300">+</button>
          </div>
          <button className="flex-grow bg-teal-600 px-6 py-3 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md">
            <span>Add to Cart</span>
            <FaCartPlus className="text-lg" />
          </button>
        </div>
        <div className="border-t pt-4">
          <h3 className="font-semibold text-gray-700 mb-2">Product Features:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Premium quality materials</li>
            <li>Comfortable fit for all-day wear</li>
            <li>Versatile design for various occasions</li>
            <li>Easy care and maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
)
};

export default ProductDetails;