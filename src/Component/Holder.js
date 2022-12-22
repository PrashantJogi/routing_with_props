import React, { forwardRef, useState } from 'react';
import { useLocation } from 'react-router';
import User from './User';
import Form, { Context } from "./Form"

const Holder = ({ userValue }) => {
  console.log(userValue, "userValue");

  const location = useLocation();

  return <>{location.pathname === "/User" && <User userValue={userValue} />}</>;
};
 


export default Holder;