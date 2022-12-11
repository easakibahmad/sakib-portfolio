import React from "react";
import { Link } from "react-router-dom";

const Project = ({ item }) => {
  const { name, shortDescription, navigationPath, img } = item;
  return (
    <div class="card shadow-xl image-full">
      <figure>
        <img className="w-full rounded" src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{shortDescription}</p>
        <div class="card-actions justify-end">
          <Link to={`/${navigationPath}`}>
            <button class="btn btn-warning btn-outline text-xl rounded-xl">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
