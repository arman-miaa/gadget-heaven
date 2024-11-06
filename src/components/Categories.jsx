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
          className={({ isActive }) =>
            `mt-4 p-[10px] rounded-full text-lg font-medium ${
              isActive ? "bg-[#9538E2]" : "bg-[#09080F0D]"
            }`
          }
        >
          All Product
        </NavLink>
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category}`}
            key={category.id}
            className={({ isActive }) =>
              `mt-4 p-[10px] rounded-full text-lg font-medium ${
                isActive ? "bg-[#9538E2]" : "bg-[#09080F0D]"
              }`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
