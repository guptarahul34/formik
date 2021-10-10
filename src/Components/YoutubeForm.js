import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required().min(2).max(10).label(" Name "),
    email: Yup.string().email(" Invalid Email! ").required().label("Email"),
    channel: Yup.string().required(" Required! ").label(" Channel ").min(7)
})

function YoutubeForm() {
        const formik = useFormik({
            initialValues:{
                name:"",
                email:"",
                channel:""
            },
            onSubmit: values =>{
                // console.log(values);
                alert(`my name is name = ${formik.values.name} and My Email = ${formik.values.email} and My Channel Name - ${formik.values.channel} `)
                formik.handleReset();
            },
            validationSchema
            // validate: values =>{
            //     let errors = {}
            //         let name = values.name;
                   
            //     if(!values.name){
            //         errors.name = " Required* "
            //     }else if(!(name.charCodeAt(0) >=65 && name.charCodeAt(0)<=90)){
            //         errors.name = ' Please Enter Valid Name '
            //     }

            //     if(!values.email){
            //         errors.email = " Required* "
            //     }

            //     if(!values.channel){
            //         errors.channel = " Required* "
            //     }

            //     return errors;
            // }
        })
        // console.log(formik.touched);
    return (
        <>
        <h1 className="text-center p-2 text-success"> <i> Formik Example By Rahul Gupta </i> </h1>
        <form onSubmit={formik.handleSubmit}>
        <div className="">
        <div className="row justify-content-center pt-2 ">
            <div className="col-lg-3 col-md-4 col-sm-12 pt-1">
                <div className="form-group p-2">
                    <label htmlFor="name"> Name </label> 
                    <input 
                    type="text"
                     value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="name" 
                    className="form-control"
                    autoComplete="off" />
                    {/* <span className="m-2">First Letter Must Be Capital Of Name </span> */}
                </div>
                <div className="text-danger p-2">{(formik.touched.name) ? formik.errors.name : null}</div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-12 mt-1">
                <div className="form-group p-2">
                    <label htmlFor="email"> Email </label>
                    <input 
                    type="text"
                     value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email" 
                    className="form-control" 
                    autoComplete="off"
                    />
                </div>
                <div className="text-danger p-2">{(formik.touched.email) ? formik.errors.email : null}</div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-12 mt-1">
                <div className="form-group p-2">
                    <label htmlFor="channel"> Channel </label>
                    <input 
                    type="text"
                     value={formik.values.channel}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="channel" 
                    className="form-control" 
                    autoComplete="off"
                    />
                </div>
                <div className="text-danger p-2">{(formik.touched.channel) ? formik.errors.channel : null}</div>
            </div>
        </div>
           <div className="row justify-content-center mt-4">
                <div className="col-lg-3">
                     <button type="submit" className="btn btn-success rounded-5">Submit</button>
                </div>
           </div>
           </div>
    </form>
        </>
    )
}

export default YoutubeForm;
