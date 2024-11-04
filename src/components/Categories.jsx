import React from "react";
import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div className="border-2">
          <div className="flex flex-col">
              <Link></Link>
        {categories.map((category) => (
          <NavLink key={category.id}>{category.category}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
