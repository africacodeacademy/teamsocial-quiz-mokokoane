import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';


const FormSignup = ({ submitForm }) => {

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
   
  );
  const Player =() =>{
  localStorage.setItem("name",values.username);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className='form' noValidate>
      <hr className="line"/> 
        <h1>
          mokokoane Quiz game.
        </h1>
        <hr className="line"/> 
        <div className='form-inputs'>
          <label className='form-label'>User Name:</label>
          <input
            className='form-input'
            id= "username"
            type='text'
            name='username'
            placeholder='User Name'
            value={values.username}
            onChange={handleChange}
          />
        
          {errors.username && <p>{errors.username}</p>}
          <button className='form-input-btn' type='submit'onClick={Player}>
          Sign up
        </button>     
       </div>
       
      </form>
    </div>
  );
};

export default FormSignup;
