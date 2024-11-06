// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useState } from "react";

const Carts = () => {
    const data = useLoaderData();
    const {category} = useParams();
    // console.log(category);
    const [carts, useCarts] = useState([data]);
    

    useEffect(() => {
           if (category) {
             const filterByCategory = [...data].filter(
               (cart) => cart.category === category
             );
             useCarts(filterByCategory);
           } else {
             useCarts(data);
           }
    },[category,data])
    // const [carts, setCarts] = useState([]);
    


    // useEffect(() => {
        
    // },[])
   
    return (
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my12 flex-grow">
        {carts.length === 0? <h3 className="text-center text-3xl text-red-300  mt-12">No Items Available </h3>: carts.map((cart,ind) => (
          <Cart key={ind} cart={cart}></Cart>
        ))}
      </div>
    );
};

export default Carts;