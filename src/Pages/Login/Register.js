import React from 'react';
import {
 
    useSignInWithGoogle,
  } from "react-firebase-hooks/auth";
  import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
  import { useUpdateProfile } from 'react-firebase-hooks/auth';

  import auth from "../../firebase.init";
  import { useForm } from "react-hook-form";
  import Loading from "../Shared/Loading";
  import { Link, useNavigate } from "react-router-dom";
import { async } from '@firebase/util';
import useToken from '../../hooks/useToken';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
   
      const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
      const [token] = useToken(user||guser);
      const navigate =useNavigate();
      const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({ displayName:data.name });
        console.log(data);
        
      };
      if(token){
        navigate('/appoinment');
      }
      let errorMessage;
      if (loading || gloading||updating) {
        return <Loading></Loading>;
      }
      if (error || gerror||updateError) {
        errorMessage = (
          <p className="text-red-500 my-5">{error?.message || gerror?.message||updateError?.message}</p>
        );
      }
    
      if (guser) {
        console.log(guser);
      }
      if (user) {
        console.log(user);
      }


    return (
        <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required!",
                  },
                  
                })}
              />
                 <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!",
                  },
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label className="label">
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters longer or more",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label className="label">
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {errorMessage}
            <input
              type="submit"
              value="REGISTER"
              className="btn bg-accent text-white w-full max-w-xs"
            />
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-secondary">
             Please Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
    );
};

export default Register;