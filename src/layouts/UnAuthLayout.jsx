import React from 'react'
import { Outlet } from 'react-router-dom';
import { HOME_ROUTE } from '../constants/routes';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const UnAuthLayout = () => {
    const { user } = useSelector((state)=>state.auth)
  return (
    <div>
     {user? <Navigate to={HOME_ROUTE}/>:<Outlet/>}
    </div>
  )
}

export default UnAuthLayout;
