import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseByValue, increaseCount } from "../redux/counter/counterSlice";

const Home = () => {
  const [num,setNum]=useState(0);
  const dispatch = useDispatch();
  const { count } = useSelector((state)=>state.counter)
  
  
  function increaseCountValue(){
    dispatch(increaseCount());
  }
  function decreaseCountValue() {
    dispatch(decreaseCount()); // Just dispatch the decrease action
  }

  return (
    <section>
        <h1 className="mt-24">Home page</h1>    
        <p>Count:{count}</p>
        <input type="number" className="border" onChange={(e)=>setNum(e.target.value)} />
        <button className="bg-red-500 text-white px-5 py-2" onClick={increaseCountValue}>+</button>
        <button className="bg-blue-500 text-white px-5 py-2" onClick={decreaseCountValue}>-</button>
        <button className="bg-green-500 text-white px-5 py-2" onClick={()=>dispatch(increaseByValue(parseInt(num)))}>increaseByValue</button>
    </section>
  )
}

export default Home;
