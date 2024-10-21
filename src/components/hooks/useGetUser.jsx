import React, { useContext } from 'react'
import { StepFormContext } from '../../context'
import axios from 'axios'

const useGetUserRole = () => {

    const {formData} = useContext(StepFormContext);
    const userRole = formData.role;

  return userRole;
}

export default useGetUserRole