import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    // console.log(cart);
    const {title,image,price,id } = cart;
    return (
      <div>
        <div className="card bg-base-100 p-4 shadow-xl">
          <figure className=' h-[200px] '>
            <img className='w-full border-2 rounded-xl h-full object-contain overflow-hidden'
              src={image}
              alt="Product"
            />
          </figure>
          <div className="">
            <h2 className="text-2xl font-semibold mt-4">{title}</h2>
            <p className="text-xl font-medium text-[#09080F99]">
              Price: ${price}
            </p>
            <div className="card-actions">
              <Link to={`detail/${id}`} className="text-[#9538E2] border-[1px] py-[4px] px-4 mt-4 rounded-full border-[#9538E2]">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;