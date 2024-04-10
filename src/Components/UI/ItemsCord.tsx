import React from "react";
import Cord from "./Cord.tsx";

const Items = [
  { title: "Section 1", content: "Content 1..." },

  { title: "Section 3", content: "Content 3..." },
];

const ItemsCord: React.FC = () => {
  return (
    <div>
      <h2>H-1</h2>
      <Cord items={Items} />
    </div>
  );
};

export default ItemsCord;
