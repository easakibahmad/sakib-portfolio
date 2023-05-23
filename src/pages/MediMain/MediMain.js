import React from "react";
import { useLoaderData } from "react-router-dom";
import MediService from "../../components/mediService/MediService";

const MediMain = () => {
  const bookData = useLoaderData();
  return (
    <div>
      {bookData.map((item) => (
        <MediService key={item.id} item={item}></MediService>
      ))}
    </div>
  );
};

export default MediMain;
