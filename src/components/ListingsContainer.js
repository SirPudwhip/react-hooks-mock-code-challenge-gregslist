import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingArray}) {

  const [test, setTest] = useState(true)
  
  const handleDelete = () => {
    setTest(!test)
  }

  useEffect(() => {
    let url = 'http://localhost:6001/listings';
    fetch(url, {
      method: 'PATCH',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify()
    })
    .then(r => r.json())
    
  }, [test])

  let array = listingArray.map(listingObj => {
    return (
    <ListingCard listingObj = {listingObj} handleDelete={handleDelete} key={listingObj.id}/>)}
  )

  return (
    <main>
      <ul className="cards">
         {array}
      </ul>
    </main>
  );
}

export default ListingsContainer;
