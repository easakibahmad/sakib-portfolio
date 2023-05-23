import React from "react";
import { useLoaderData } from "react-router-dom";
import Csedu from "../../components/csedu/Csedu";

const CseduMain = () => {
  const bookData = useLoaderData();
  return (
    <div>
      {bookData.map((item) => (
        <Csedu key={item.id} item={item}></Csedu>
      ))}
    </div>
  );
};

export default CseduMain;
