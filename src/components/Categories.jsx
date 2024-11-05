import React from "react";
import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div className="">
      <div className="flex flex-col bg-white p-4 w-[220px]">
        <Link></Link>
        <NavLink
          to="/"
          className="bg-[#09080F0D] mt-4 p-[10px] rounded-full text-lg font-medium"
        >
          All Product
        </NavLink>
        {categories.map((category) => (
          <NavLink
            className="bg-[#09080F0D] mt-4 p-[10px] rounded-full text-lg font-medium"
            to={`/category/${category.category}`}
            key={category.id}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
