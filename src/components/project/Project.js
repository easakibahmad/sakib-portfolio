import React from "react";

const Project = ({ item }) => {
  const { name, shortDescription, liveSite, img } = item;
  return (
    <div class="card shadow-xl image-full">
      <figure>
        <img className="w-full rounded" src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{shortDescription}</p>
        <div class="card-actions justify-end">
          <a href={liveSite}>
            <button class="btn btn-success text-xl rounded-xl">
              See Website
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
