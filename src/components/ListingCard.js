import React, {useState} from "react";


function ListingCard({listingObj, handleDelete}) {

  let [favoriteState, setFavoriteState] = useState(false)
  
  function handleFavorite() {
    setFavoriteState((favoriteState)=> !favoriteState)
  }

  return (
    <li className="card" >
        <div className="image">
          <span className="price">$0</span>
          <img src={listingObj.image} alt={listingObj.description} />
        </div>
        <div className="details">
          {favoriteState ? (
           <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
          ) : (    
            <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
          )}
          <strong>{listingObj.description}</strong>
          <span> · {listingObj.location}</span>
          <button onClick={handleDelete} id={listingObj.id} className="emoji-button delete">🗑</button>
        </div>
    </li>
  );
}

export default ListingCard;
