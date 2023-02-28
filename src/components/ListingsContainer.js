import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingArray}) {
  return (
    <main>
      <ul className="cards">
        <ListingCard listingArray = {listingArray}/> 
      </ul>
    </main>
  );
}

export default ListingsContainer;
