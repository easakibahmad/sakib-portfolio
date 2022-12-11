import React from "react";
import { useLoaderData } from "react-router-dom";
import AdventurerDetail from "../../components/adventurerDetail/AdventurerDetail";

const Adventurer = () => {
  const adventurerData = useLoaderData();
  return (
    <div>
      {adventurerData.map((item) => (
        <AdventurerDetail key={item.id} item={item}></AdventurerDetail>
      ))}
    </div>
  );
};

export default Adventurer;
