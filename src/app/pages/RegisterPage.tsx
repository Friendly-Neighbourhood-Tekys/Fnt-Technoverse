import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('/api/register', data);
      console.log(response.data); // Handle the API response accordingly
    } catch (error) {
      console.error(error); // Handle error cases
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Email is required and must be valid</span>}
        </div>
        <div>
          <label>Password</label>
          <input {...register('password', { required: true, minLength: 6 })} />
          {errors.password && <span>Password is required and must be at least 6 characters</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
