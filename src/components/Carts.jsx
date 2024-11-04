import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const Carts = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const {category} = useParams();
    console.log(category);
    console.log(data);
    const [carts,setCarts] = useState([])
    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(
                cart => cart.category === category

            )
            setCarts(filterByCategory)
        } else {
            setCarts(filterByCategory);
        }
    },[category,data])
    return (
        <div className='border-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my12'>
            
        </div>
    );
};

export default Carts;