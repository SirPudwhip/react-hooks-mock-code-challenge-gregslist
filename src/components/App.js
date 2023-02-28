import React, {useEffect, useState}from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  let [listingArray, setListingArray] = useState([])
  
  useEffect(() => {
    let url = 'http://localhost:6001/listings';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {setListingArray(data)});

  }, [])


  return (
    <div className="app">
      <Header />
      <ListingsContainer listingArray={listingArray} />
    </div>
  );
}

export default App;
