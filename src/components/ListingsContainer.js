import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingArray}) {

  let array = listingArray.map(listingObj => {
    return (
    <ListingCard listingObj = {listingObj}/>)}
  )

console.log(array)

  return (
    <main>
      <ul className="cards">
         {array}
      </ul>
    </main>
  );
}

export default ListingsContainer;
