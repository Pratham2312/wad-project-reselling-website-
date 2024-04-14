import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

 
  const onSubmit = (data) => {
    
    console.log(data); 
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center '>
        <div id="my_modal_3" className="border shadow-md p-5">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} >
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

              <h3 className="font-bold text-lg">Registration</h3>

              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input type="text" placeholder='Enter Name' className='w-80 px-3 border rounded-md py-1'
                       {...register("name", { required: true })}/>
                {errors.name && <span>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Mobile No</span>
                <br />
                <input type="tel" placeholder='Enter Mobile No' className='w-80 px-3 border rounded-md py-1'
                       {...register("mobile", { required: true })}/>
                {errors.mobile && <span>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email" placeholder='Enter Email' className='w-80 px-3 border rounded-md py-1'
                       {...register("email", { required: true })}/>
                {errors.email && <span>This field is required</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input type="password" placeholder='Enter Password' className='w-80 px-3 border rounded-md py-1'
                       {...register("password", { required: true })}/>
                {errors.password && <span>This field is required</span>}
              </div>
              {/* Button */}
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 '>Sign up</button>
                <p>Registered?<Link to="/" className='underline text-blue-500 cursor-pointer'> Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
