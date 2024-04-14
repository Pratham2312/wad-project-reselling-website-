import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Define onSubmit function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // You can handle form data here, such as sending it to a server
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <h3 className="font-bold text-lg">Login</h3>
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email" placeholder='Enter Email' className='w-80 px-3 border rounded-md py-1'
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input type="text" placeholder='Enter Password' className='w-80 px-3 border rounded-md py-1'
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              {/* Button */}
              <div className='flex justify-around mt-4'>
                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1'>Login</button>
                <p>Not registered?<Link to="/Signup" className='underline text-blue-500 cursor-pointer'> Signup</Link></p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
