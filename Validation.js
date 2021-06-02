import * as yup from 'yup';
import React from 'react';
export const userValidation = yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email().required(),
    MobileNumber:yup.string().min(10).max(10).required(),
    Gender:yup.string().required(),
})
