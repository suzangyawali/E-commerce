import axios from "axios";
import config from "../config/config";

const authToken = localStorage.getItem("authToken");

// const getProducts= async ()=>{
   
//   const response=  await axios.get(`${config.baseApiUrl}/api/products`);
//   console.log("Fetched Products:", response.data);
//   return response;
// };

const getProducts = async ({
  limit = 20,
  sort = JSON.stringify({ createdAt: -1 }),
  filters = {},
}) => {
  // sort: sorting key, sort order (1: ASC, -1: DESC)
  // filterBy: key, value for e.g name: iphone
  // const query = `limit=${limit}&sort=${sort}&filters=${JSON.stringify(
  //   filters
  // )}`;

  // Convert sort to a JSON string within the function
  const query = `limit=${limit}&sort=${encodeURIComponent(JSON.stringify(sort))}&filters=${encodeURIComponent(JSON.stringify(filters))}`;
  const response = await axios.get(
    `${config.baseApiUrl}/api/products?${query}`
  );

  return response;
};

const getProductsById= async (id)=>{
    const response = await axios.get(`${config.baseApiUrl}/api/products/${id}`);
    return response;
}


const addProduct = async (data) => {
  const response = await axios.post(`${config.baseApiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response;
};


const editProduct = async (id, data) => {
  const response = await axios.put(
    `${config.baseApiUrl}/api/products/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response;
};
const deleteProduct = async (id) => {
  const response = await axios.delete(
    `${config.baseApiUrl}/api/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response;
};
export {getProducts,getProductsById,addProduct,editProduct,deleteProduct};