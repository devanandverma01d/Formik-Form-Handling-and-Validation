import { useFormik } from 'formik'
import React from 'react'
import { FormSchema } from './FormikSchema'


const initialValues={
    name:"",
    email:"",
    age:"",
    pass:'',
    cpass:'',
  }
const Formik = () => {
    const {handleChange,handleSubmit,handleBlur,touched,values,errors}=useFormik({
        initialValues,
        validationSchema:FormSchema,
        onSubmit:(values,action)=>{
            console.log(values)
            console.log(values.name);
            console.log(values.email);
            action.resetForm()
        },
        
      })
  return (
    <>
        <h1>Formik Demo Form</h1>
        <hr />
        <br />
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name: </label>
            <input type="text" name='name' onBlur={handleBlur} onChange={handleChange} value={values.name}/>
            <br />
            {errors.name && touched.name ? <span style={{color:'red'}}>{errors.name}</span>:null}
            <br /><br />

            <label htmlFor="">Email: </label>
            <input type="text" name='email' onBlur={handleBlur} onChange={handleChange} value={values.email} />
            <br />
            {errors.email && touched.email ? <span style={{color:'red'}}>{errors.email}</span>:null}
            <br /><br />

            <label htmlFor="">Age: </label>
            <input type="text" name='age' onBlur={handleBlur} onChange={handleChange} value={values.age} />
            <br />
            {errors.age && touched.age ? <span style={{color:'red'}}>{errors.age}</span>:null}
            <br /><br />

            <label htmlFor="">Password: </label>
            <input type="text" name='pass' onBlur={handleBlur} onChange={handleChange} value={values.pass} />
            <br />
            {errors.pass && touched.pass ? <span style={{color:'red'}}>{errors.pass}</span>:null}
            <br /><br />

            <label htmlFor="">Confirm Password: </label>
            <input type="text" name='cpass' onBlur={handleBlur} onChange={handleChange} value={values.cpass} />
            <br />
            {errors.cpass && touched.cpass ? <span style={{color:'red'}}>{errors.cpass}</span>:null}
            <br /><br />
            <input type="submit" value="Submit" /> 
        </form>
    </>
  )
}

export default Formik