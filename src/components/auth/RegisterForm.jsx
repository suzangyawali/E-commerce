
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";
import { registerUser } from "../../redux/auth/authActions";
import Spinner from "../Spinner";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const [showPassword,setshowPassword]=useState(false);
    const [showConfirmPassword,setshowConfirmPassword]=useState(false);

    const {register,handleSubmit ,formState,watch} = useForm();
//   const {name,ref,onChange,onBlur}= register("email");
     const {errors} =formState;
   
     const { loading,error } = useSelector((state)=>state.auth)
      const navigate = useNavigate();
      const password = watch("password");

    const dispatch =useDispatch();

function submitForm(data){
     dispatch(registerUser(data))
      //    login(data).then((response)=>{
      //   console.log(response.data);
      //   dispatch(setUser(response.data));
      //   navigate(HOME_ROUTE);
      //  }).catch((error)=>{
      //   console.log(error.response.data);
      //  })
      
      }
      useEffect(()=>{
       toast(error,{
        type:"error",
        autoClose:1500,
       })
      },[error])
  return (

    <form className='w-full  border  bg-slate-300 py-8 px-12 ' onSubmit={handleSubmit(submitForm)}>
    <div className="py-1">
        <label htmlFor="name">Name</label>
        <input 
        type="name" 
        id="name"
         className="w-full mt-1 py-1 px-2 rounded"
         {...register("name",{
            required:"Name is required",
            
         })}
         />
         <p className="text-red-500 text-md ml-2 mt-2">{errors.email?.message}</p>
    </div>
    <div className="py-1">
        <label htmlFor="email">Email</label>
        <input 
        type="email" 
        id="email"
         className="w-full mt-1 py-1 px-2 rounded"
         {...register("email",{
            required:"Email address is required",
            pattern:{
                value:EMAIL_REGEX,
                message:"Invalid email address",
            }
         })}
         />
         <p className="text-red-500 text-md ml-2 mt-2">{errors.email?.message}</p>
    </div>

    <div className="py-1 relative">
    <label htmlFor="password">Password</label>
    <input 
    type={showPassword ? "text":"password"}
    id="password"
     className="w-full mt-1 py-1 px-2 rounded"
     {...register("password",{
        required:"Password is required",
        minLength:{
            value:8,
            message:"Password length should be greater than 8",
        },
        pattern:{
            value:PASSWORD_REGEX,
            message:"Password must contain uppercase, lowercase and numbers.",
        }
     })}
         />
      <p className="text-red-500 text-md ml-2 mt-2">{errors.password?.message}</p>
      <button className="absolute right-3 top-10 border " onClick={()=>{
        return  setshowPassword(!showPassword)
      }}
          type="button">{showPassword? <FaEye/> :<FaEyeSlash />}
      </button>

    </div>

    <div className="py-1 relative">
    <label htmlFor="confirmPassword">ConfirmPassword</label>
    <input 
    type={showPassword ? "text":"password"}
    id="confirmPassword"
     className="w-full mt-1 py-1 px-2 rounded"
     {...register("confirmPassword",{
        required:"Conform Password is required",
        validate: (value) => {
            return value === password || "Passwords do not match.";
          },
     })}
         />
      <p className="text-red-500 text-md ml-2 mt-2">{errors.confirmPassword?.message}</p>
      <button className="absolute right-3 top-10 border " onClick={()=>{
        return  setshowConfirmPassword(!showConfirmPassword)
      }}
          type="button">{showConfirmPassword? <FaEye/> :<FaEyeSlash />}
      </button>

    </div>

    <div className="mt-5 text-center">
    <button
          type="submit"
          className="bg-teal-700 text-white rounded px-5 py-1 cursor-pointer flex items-center mx-auto"
        >
          Register
          {loading ? <Spinner className="h-[1.2rem] w-[1.2rem] ml-1" /> : null}
     </button>
    </div>
</form>
  )
}

export default RegisterForm;
