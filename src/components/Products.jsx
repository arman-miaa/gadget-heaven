import React from 'react';
import Categories from './Categories';
import { Outlet } from 'react-router-dom';
import Carts from './Carts';

const Products = ({ categories }) => {
    console.log(categories);
    return (
      <div className='border-2 flex gap-4'>
        <h1>Products pages</h1>
        <div>
          <Categories categories={categories}></Categories>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-32'>
          <Carts></Carts>
        </div>
      </div>
    );
};

export default Products;