import React from "react";
import { useLoaderData } from "react-router-dom";
import PortableDetail from "../../components/portableDetail/PortableDetail";

const Portable = () => {
  const portableData = useLoaderData();
  return (
    <div>
      {portableData.map((item) => (
        <PortableDetail key={item.id} item={item}></PortableDetail>
      ))}
    </div>
  );
};

export default Portable;
