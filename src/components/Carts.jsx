// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useState } from "react";

const Carts = () => {
    const data = useLoaderData();
    console.log(data);
    const {category} = useParams();
    console.log(category);
    const [carts, useCarts] = useState([data]);
    

    useEffect(() => {
           if (category) {
             const filterByCategory = [...data].filter(
               (coffee) => coffee.category === category
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
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my12 flex-grow">
        {carts.length === 0? 'no item': carts.map((cart,ind) => (
          <Cart key={ind} cart={cart}></Cart>
        ))}
      </div>
    );
};

export default Carts;