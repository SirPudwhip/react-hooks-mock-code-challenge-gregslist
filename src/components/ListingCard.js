import React, {useState} from "react";


function ListingCard({listingArray}) {

  let [favoriteState, setFavoriteState] = useState(false)
  

  
  

  listingArray.map(listingObj => {
    return(
  let image = listingObj.image;
  let description = listingObj.description;
  let location = listingObj.location; 
  let key = listingObj.id
  )})
  
  function handleFavorite() {
    console.log('I am clicked')
    setFavoriteState((favoriteState)=> !favoriteState)
    // console.log(favoriteState)
  }

  return (
    <li className="card" key = {key}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteState ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );}

export default ListingCard;
