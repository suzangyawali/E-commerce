import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLimit, setSort,setFilters } from '../../redux/products/productSlice';

const ProductsFilter = () => {
  const {categories,query} =useSelector((state)=>state.product);
  const dispatch = useDispatch();

  function setProductLimit(limit){
    dispatch(setLimit(parseInt(limit)));
   console.log(limit)
  }
  
  function sortProducts(sort){
    dispatch(setSort(sort));
     console.log(sort);
  }
  function filterBYName(value){
    dispatch(setFilters({name:value}));
   console.log(value);
  }
  function filterByCategory(value){
    dispatch(setFilters({category:value}));
   console.log(value);
  }
  
  return (
    <div className='max-w-screen-xl mx-auto bg-red-300 px-5 py-2 my-4 rounded flex flex-col gap-3 md:items-center md:flex-row md:justify-between '>
     <div className='md:mx-auto'>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' className='bg-slate-100 boder ml-2' onChange={(e)=>filterBYName(e.target.value)}/>
     </div>

     <div className='md:mx-auto'> 
     <label htmlFor='name'>Category</label>
     <select
          name="category"
          id="category"
          className="border ml-2 py-1 px-2"
          value={query?.filters?.category}
          onChange={(e) => filterByCategory(e.target.value)}
        >
         <option value="">Select category</option>
          {categories.map((category,index)=>(
                <option key={index}>{category}</option>
          ))}
        </select>
     </div>

     <div className='md:mx-auto'>
     <label htmlFor='sort'>Sort</label>
     <select name="sort" id="sort" className='bg-slate-100 boder ml-2'onChange={(e)=>sortProducts(e.target.value)} >
     <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
     <option value={JSON.stringify({ price: 1 })}>Price:Low to High</option>
     <option value={JSON.stringify({ price: -1 }) }>Price:High to Low</option>
     </select>
    </div>

     <div className='md:mx-auto'>
     <label htmlFor='limit'>Limit</label>
     <select name="limit" id="limit" className='bg-slate-100 boder ml-2'onChange={(e)=>setProductLimit(e.target.value)} >
     <option value='10'>10</option>
     <option value='20'>20</option>
     <option value='50'>50</option>
     <option value='100'>100 </option>
     </select>
     </div>
    </div>
  )
}

export default ProductsFilter;