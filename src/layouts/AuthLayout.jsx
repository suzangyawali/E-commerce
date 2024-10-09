import React from 'react'
import { Outlet } from 'react-router-dom';
import { LOGIN_ROUTE } from '../constants/routes';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const AuthLayout = () => {
    const { user } = useSelector((state)=>state.auth)
    
  return (
    <div>
     {user? <Outlet/>:<Navigate to={LOGIN_ROUTE}/>}
    </div>
  )
}

export default AuthLayout;
