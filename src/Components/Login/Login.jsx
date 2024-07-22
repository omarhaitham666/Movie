import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

function Login() {
    const initValues = {
        FirstName: "",
        LastName: "",
        Age: "",
        Email: "",
        Password: ""
    };
    
    const inputValidation = Yup.object({
        Email: Yup.string()
            .min(15, "cant be less than 15 characters")
            .email("please provide a valid email")
            .required("this field is required"),
        Password: Yup.string()
            .min(8, "cant be less than 8 characters")
            .required("this field is required")
            .max(20, "cant be more than 20 characters"),
        FirstName: Yup.string()
            .min(2, "cant be less than 2 characters")
            .required("this field is required")
            .max(20, "cant be more than 20 characters"),
        LastName: Yup.string()
            .min(2, "cant be less than 2 characters")
            .required("this field is required")
            .max(20, "cant be more than 20 characters"),
        Age: Yup.number()
            .required("this field is required")
            .min(0, "Age can't be negative")
            .max(120, "Age can't be more than 120")
    });
    
    const formik = useFormik({
        initialValues: initValues,
        validationSchema: inputValidation,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div className="container">
            <form className='mt-5' onSubmit={formik.handleSubmit}>
                <h1 className='text-light text-capitalize'>Login</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputFirstName" className="form-label text-light">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputFirstName" 
                        name="FirstName"
                        value={formik.values.FirstName} 
                        onChange={formik.handleChange} 
                    />
                    {formik.touched.FirstName && formik.errors.FirstName ? (
                        <small className='text-danger'>{formik.errors.FirstName}</small>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLastName" className="form-label text-light">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputLastName" 
                        name="LastName"
                        value={formik.values.LastName} 
                        onChange={formik.handleChange} 
                    />
                    {formik.touched.LastName && formik.errors.LastName ? (
                        <small className='text-danger'>{formik.errors.LastName}</small>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAge" className="form-label text-light">Age</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="exampleInputAge" 
                        name="Age"
                        value={formik.values.Age} 
                        onChange={formik.handleChange} 
                    />
                    {formik.touched.Age && formik.errors.Age ? (
                        <small className='text-danger'>{formik.errors.Age}</small>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label text-light">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail" 
                        name="Email"
                        value={formik.values.Email} 
                        onChange={formik.handleChange} 
                    />
                    {formik.touched.Email && formik.errors.Email ? (
                        <small className='text-danger'>{formik.errors.Email}</small>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        name="Password"
                        value={formik.values.Password} 
                        onChange={formik.handleChange} 
                    />
                    {formik.touched.Password && formik.errors.Password ? (
                        <small className='text-danger'>{formik.errors.Password}</small>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;
