import React from 'react';
import Hero from '../components/Hero';

const Contact = () => {
    return (
      <div>
        <div className="bg-[#9538E2] relative pt-12 pb-32 text-white  text-center -mt-8 rounded-xl">
          <h1 className="font-bold text-5xl ">Contact Us</h1>
          <p className="my-6">
            Explore the latest gadgets that will take your experience to <br />{" "}
            the next level. From smart devices to the coolest accessories, we
            have it all!
          </p>

          <Hero></Hero>
        </div>
        <div className="mb-16 w-full  -mt-28 sticky">
          <div className="border-2 w-3/4 mx-auto p-4 rounded-xl">
            <img
              className=" w-full mx-auto rounded-2xl object-fill  text-center  h-[363px] "
              src="/contact.jpg"
              alt=""
            />
          </div>
        </div>
        {/* form */}
        <div className="hero bg-base-200 py-20 px-4 rounded-xl">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center ">
              <i className="fa-regular fa-user text-8xl text-[#9538E2]"></i>
              <h1 className="text-4xl font-bold">Contact Us on Social Media</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex space-x-4">
  <a href="https://facebook.com" target="_blank" className="flex items-center justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-blue-600 text-white hover:bg-blue-700">
    <i className="fab fa-facebook-f"></i>
  </a>
  
  <a href="https://twitter.com" target="_blank" className="flex items-center justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-blue-400 text-white hover:bg-blue-500">
    <i className="fab fa-twitter"></i>
  </a>
  
  <a href="https://instagram.com" target="_blank" className="flex items-center justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-pink-500 text-white hover:bg-pink-600">
    <i className="fab fa-instagram"></i>
  </a>
  
  <a href="https://linkedin.com" target="_blank" className="flex items-center justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-blue-700 text-white hover:bg-blue-800">
    <i className="fab fa-linkedin-in"></i>
                </a>
                
  <a href="https://linkedin.com" target="_blank" className="flex items-center justify-center w-24 rounded-lg text-xl lg:text-2xl  h-[44px]  bg-gray-700 text-white hover:bg-gray-800">
    <i className="fab fa-github"></i>
  </a>
</div>

            </div>

            <div className="card bg-base-100 w-full   shadow-2xl">
              <form className="card-body">
                <h1 className="text-center underline text-2xl font-bold">
                  Submit Form
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Massege</span>
                  </label>
                  <textarea
                    placeholder="Enter Your Message"
                    className="input input-bordered w-full h-36"
                    style={{ resize: "none" }}
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#9538E2] text-white font-bold text-2xl">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <h1>contact Page....</h1>
      </div>
    );
};

export default Contact;