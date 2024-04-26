import React from "react";
import { useState } from "react";

const itemList = [
  "Lando Norris",
  "Lewis Hamilton",
  "Max Verstappen",
  "Charles Leclerc",
  "Carlos Sainz",
];

export default function OrderItems() {
  const [items, setItems] = useState(itemList);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedItemIndex(null);
  };

  const handleDragOver = (index) => {
    if (draggedItemIndex === null) return;
    const newItems = [...items];
    const draggedItem = newItems[draggedItemIndex];
    newItems.splice(draggedItemIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggedItemIndex(index);
  };

  return (
    <>
      <h1>Question No. 3</h1>
      <div className="order-items">
    
   
      <h3>List of F1 drivers</h3>
      <ol> 
        {items.map((item, index) => (
          <li
            key={index}
            className={draggedItemIndex === index ? 'dragging' : ''}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => {
              e.preventDefault(); 
              handleDragOver(index);
            }}
            onDragEnd={handleDragEnd}
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
 
    </>
  );
}
