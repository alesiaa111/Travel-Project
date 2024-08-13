import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from './authSlice';

const AdminLoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(loginAdmin(data))
      .unwrap()
      .then(() => {
        // Перенаправить администратора на страницу администратора
        navigate('/admin-dashboard');
      })
      .catch((error) => {
        // Обработать ошибку входа
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register('email', { required: true })}
      />
      {errors.email && <div>Email is required</div>}
      <input
        type="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {errors.password && <div>Password is required</div>}
      {error && <div>{error}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};