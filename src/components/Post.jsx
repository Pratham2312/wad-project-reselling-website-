import React from 'react';

function Post() {
  return (
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 ml-80">
      <form className="form-control w-full max-w-xs mt-28 items-center justify-center text-center">
        <div className="label">
          <h1>Choose the Image of the product</h1>
        </div>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        
        <div className="label">
          <span className="label-text">Product Name</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        
        <div className="label">
          <span className="label-text">Product Description</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        
        <div className="label">
          <span className="label-text">Product Prize</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        
        <div className="label">
          <span className="label-text">Contact Number</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        
        <button type="submit" className="btn btn-active btn-neutral mt-5">Submit</button>
      </form>
    </div>
  );
}

export default Post;
