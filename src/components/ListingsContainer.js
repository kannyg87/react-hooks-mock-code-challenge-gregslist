import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemsToDisplay, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */
        itemsToDisplay.map(card => <ListingCard card={card} handleDelete={handleDelete} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
